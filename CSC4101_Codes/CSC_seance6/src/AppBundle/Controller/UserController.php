<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class UserController extends Controller
{
	/**
	 * @Route("/api/blog/user/{email}")
	 */
	public function getUserByEmailAction($email){
		
		$userManager = $this->get('fos_user.user_manager');
		
		$user = $userManager->findUserByEmail($email);
		if(!is_object($user)){
			throw $this->createNotFoundException();
		}
		
		return $this->render('blog/user.html.twig', array('user' => $user));
	}
}