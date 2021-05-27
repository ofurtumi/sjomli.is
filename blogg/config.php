<?php 
	session_start();

	// connect to database
    $conn = mysqli_connect("sjomli.is","25665_tumi_php","Uy4Kl6La1Fl8Yf0Cg4", "25665_blogg_php");

    if (!$conn) {
        die("Error connecting to the database: " . mysqli_connect_error());
    }
	define ('ROOT_PATH', realpath(dirname(__FILE__)));
	define('BASE_URL', 'https://sjomli.is/');
?>