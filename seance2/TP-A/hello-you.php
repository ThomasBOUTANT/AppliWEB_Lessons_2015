<html>
 <head>
  <title>Test PHP</title>
 </head>
 <body>
 <?php

   $nom = 'le monde';
   $argname = $_GET['name'];
   if($argname) {
      $nom = $argname;
   }
   echo "<p>Bonjour $nom</p>";
 ?>
 </body>
</html>
