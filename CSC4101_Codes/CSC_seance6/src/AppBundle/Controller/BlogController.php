<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use AppBundle\Entity\Post;
use AppBundle\Entity\Comment;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class BlogController extends Controller
{
	
	/**
	 * @Route("/blog", defaults={"page": 1})
	 * @Route("/blog/page/{page}", requirements={"page": "[1-9]\d*"}, name="blog_list_paginated")
	 */
	public function listAction($page)
	{
		$posts = $this->getDoctrine()->getRepository(Post::class)->findLatest($page);

		return $this->render('blog/list.html.twig', array('posts' => $posts));
	}

	/**
	 * @Route("/blog/show/{id}")
	 *
	 * NOTE: The $post controller argument is automatically injected by Symfony
	 * after performing a database query looking for a Post with the 'slug'
	 * value given in the route.
	 * See http://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/converters.html
	 */
	public function showAction(Post $post, Request $request)
	{
	
		//dump($post);
		
		if (!$post) {
			// cause the 404 page not found to be displayed
			throw $this->createNotFoundException();
		}

		$newcomment = new Comment();
		
		$commentform = $this->createFormBuilder($newcomment)
		->add('content', TextareaType::class)
		->add('save', SubmitType::class, array('label' => 'Commenter'))
		->getForm();
		$commentform->handleRequest($request);
		
		if ($commentform->isSubmitted() && $commentform->isValid()) {
			
			if (!$this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_FULLY')) {
        		//throw $this->createAccessDeniedException();
        		throw new AccessDeniedHttpException;
    		}
    		$newcomment->setAuthorEmail($this->getUser()->getEmail());
    		   		
			$entityManager = $this->getDoctrine()->getManager();
			
			$post->addComment($newcomment);
			
			$entityManager->persist($newcomment);
			$entityManager->persist($post);
				
			$entityManager->flush();
		
			$this->addFlash('success', 'Commentaire '. $newcomment->getId() .' créé avec succès');
			return $this->redirectToRoute('app_blog_show', ['id' => $post->getId()]);
				
		}
		
		return $this->render('blog/show.html.twig', array('post' => $post,
				'commentform' => $commentform->createView()
		));
	}
	
	/**
	 * @Route("/blog/show/{id}/comments/{comment_id}")
	 * @ParamConverter("comment", options={"id" = "comment_id"})
	 */
	public function showCommentAction(Post $post, Comment $comment)
	{
		dump($post);
		dump($comment);
		
		return $this->render('blog/show_comment.html.twig', array('comment' => $comment, 'post' => $post));
		
	}
	
}
