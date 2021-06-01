<?php  
include('config.php');
include('includes/registration_login.php');
$PageTitle = "Skráning";
include("../header.php")
?>

<div class="container">
<div style="width: 40%; margin: 20px auto;">
		<form method="post" action="register.php" >
			<h2>Skráðu þig til að skrifa</h2>
			<?php include(ROOT_PATH . '/includes/errors.php') ?>
			<input  type="text" name="username" value="<?php echo $username; ?>"  placeholder="Notendanafn">
			<input type="email" name="email" value="<?php echo $email ?>" placeholder="Netfang">
			<input type="password" name="password_1" placeholder="Lykilorð">
			<input type="password" name="password_2" placeholder="Lykilorðið aftur">
			<button type="submit" class="btn" name="reg_user">Skrá mig</button>
			<p>
				Nú þegar í kerfinu? <a href="login.php">Skráðu þig inn!</a>
			</p>
		</form>
	</div>
</div>

<?php include("../footer.php") ?>