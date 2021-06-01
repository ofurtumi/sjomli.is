<?php  
include('config.php');
include('includes/registration_login.php');
$PageTitle = "Skrá inn";
include("../header.php");
?>

<div class="container">
    <div style="width: 40%; margin: 20px auto;">
		<form method="post" action="login.php" >
			<h2>Skráðu þig inn</h2>
			<?php include(ROOT_PATH . '/includes/errors.php') ?>
			<input type="text" name="username" value="<?php echo $username; ?>" value="" placeholder="Notendanafn">
			<input type="password" name="password" placeholder="Lykilorð">
			<button type="submit" class="btn" name="login_btn">Skrá inn</button>
			<p>
				Ekki í kerfinu? <a href="register.php">Skráðu þig hér!</a>
			</p>
		</form>
	</div>
</div>

<?php include("../footer.php") ?>