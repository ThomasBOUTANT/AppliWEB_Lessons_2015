<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use AppBundle\Entity\Post;

class BlogController extends Controller
{
	
	/**
	 * @Route("/blog")
	 */
	public function listAction()
	{
		$posts = $this->get('doctrine')
		->getManager()
		->createQuery('SELECT p FROM AppBundle:Post p')
		->execute();

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
	public function showAction(Post $post)
	{
// 		$post = $this->get('doctrine')
// 		->getManager()
// 		->getRepository('AppBundle:Post')
// 		->find($id);

		dump($post);
		
		if (!$post) {
			// cause the 404 page not found to be displayed
			throw $this->createNotFoundException();
		}

		return $this->render('blog/show.html.twig', array('post' => $post));
	}
}
