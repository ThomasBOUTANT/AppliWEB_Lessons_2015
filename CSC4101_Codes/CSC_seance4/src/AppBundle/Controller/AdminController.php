<?php
namespace AppBundle\Controller;

use AppBundle\Entity\Post;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

/**
 * Controller used to manage blog contents.
 *
 */
class AdminController extends Controller
{
	/**
	 * Creates a new Post entity.
	 *
	 * @Route("/manage/post/new", name="admin_post_new")
	 * @Route("/manage/post/{postid}/edit", name="admin_post_edit")
	 */
	public function newAction($postid = null, Request $request)
	{
		if ($postid) {
			$post = $this->getDoctrine()
			->getRepository('AppBundle:Post')
			->find($postid);
			
			dump($post);
			
			if (!$post) {
				// cause the 404 page not found to be displayed
				throw $this->createNotFoundException();
			}
		}
		else {
			$post = new Post();
			$post->setAuthorEmail('anonymous@example.com');
		}

		$form = $this->createFormBuilder($post)
		->add('title', TextType::class)
		->add('summary', TextareaType::class)
		->add('content', TextareaType::class)
		->add('save', SubmitType::class, array('label' => 'Poster'))
		->getForm();
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {

			$post->setSlug($this->get('slugger')->slugify($post->getTitle()));
			
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($post);
			
			dump($post);
			
			$entityManager->flush();
		
			if($postid) {
				$message = 'Post '. $post->getId() .' modifié avec succès';
			} else {
				$message = 'Post '. $post->getId() .' créé avec succès';
			}
			$this->addFlash('success', $message);
			
			return $this->redirectToRoute('app_blog_show', ['id' => $post->getId()]);
			
		}
		return $this->render('admin/blog/new.html.twig', [
				'form' => $form->createView(),
		]);
	}
	
}