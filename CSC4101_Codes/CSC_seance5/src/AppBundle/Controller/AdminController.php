<?php
namespace AppBundle\Controller;

use AppBundle\Entity\Post;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Session\Session;

/**
 * Controller used to manage blog contents.
 *
 */
class AdminController extends Controller
{
	/**
	 * Creates a new Post entity, or modify an existing one.
	 *
	 * Create a new post
	 * @Route("/manage/post/new", name="admin_post_new")
	 * 
	 * Or edit contents of an existing post
	 * @Route("/manage/post/{postid}/edit", name="admin_post_edit")
	 * 
	 * Or edit a draft previously saved in the session
	 * @Route("/manage/post/editdraft", name="blog_editdraft")
	 */
	public function newAction($postid = null, Request $request)
	{
		if (!$this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_FULLY')) {
			throw $this->createAccessDeniedException();
		}
		
		// If called for edition, load the post from the DB 
		if ($postid) {
			$post = $this->getDoctrine()
			->getRepository('AppBundle:Post')
			->find($postid);
			
			dump($post);
			
			if (!$post) {
				// cause the 404 page not found to be displayed
				throw $this->createNotFoundException();
			}
			
			if( (!$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) &&
				 ($this->getUser()->getEmail() != $post->getAuthorEmail()))  {
				throw $this->createAccessDeniedException();
			}
		}
		else {
			if(!$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
				throw $this->createAccessDeniedException();
			}
			
			$post = new Post();
			
			// If invoked through the draft editing route
			if ($request->attributes->get('_route') == "blog_editdraft") {
				$session = $this->get('session');
				$saveddraft = $session->get('saveddraft');
				$post->setTitle($saveddraft['title']);
				$post->setSummary($saveddraft['summary']);
				$post->setContent($saveddraft['content']);
				$session->remove('saveddraft');
			}

			$post->setAuthorEmail($this->getUser()->getEmail());
		}

		// Construct the form
		$formBuilder = $this->createFormBuilder($post)
		->add('title', TextType::class)
		->add('summary', TextareaType::class)
		->add('content', TextareaType::class);
		
		if($this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
			$formBuilder->add('authorEmail');
		}
		
		// If in new post creation, add a button to allow saving a draft
		if (!$postid) { 
			$formBuilder->add('saveDraft', SubmitType::class, array('label' => 'Sauver brouillon'));
		}
		
		$form = $formBuilder->add('save', SubmitType::class, array('label' => 'Poster'))
		->getForm();
		
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {

			$post->setSlug($this->get('slugger')->slugify($post->getTitle()));

			// If the save draft button was clicked, save the draft to the session instead fo the DB
			if((!$postid) && $form->get('saveDraft')->isClicked()) {

				$session = $this->get('session');
				
				// We don't store the Post instance directly as Doctrine entities don't match so well with the session, it seems
				$session->set('saveddraft', ['title' => $post->getTitle(), 'summary' => $post->getSummary(), 'content' => $post->getContent()]);
				
				$this->addFlash('success', 'Brouillon de post sauvegardé');
				
				// Go back to the posts list
				return $this->redirectToRoute('app_blog_list');
			}
			else {
				
				// Persist for good in the DB
				$entityManager = $this->getDoctrine()->getManager();
				$entityManager->persist($post);
				
				$entityManager->flush();
			
				// We may have created a new post of edidting an existing one
				if($postid) {
					$message = 'Post '. $post->getId() .' modifié avec succès';
				} else {
					$message = 'Post '. $post->getId() .' créé avec succès';
				}
				$this->addFlash('success', $message);
				
				// either way, display the post
				return $this->redirectToRoute('app_blog_show', ['id' => $post->getId()]);
			}	
		}
		return $this->render('admin/blog/new.html.twig', [
				'form' => $form->createView(),
		]);
	}
	
}