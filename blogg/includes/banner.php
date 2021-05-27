<?php if (isset($_SESSION['user']['username'])) { ?>
	<div class="logged_in_info">
		<span>Halló <?php echo $_SESSION['user']['username'] ?></span>
		|
		<span><a href="logout.php">Skrá út</a></span>
	</div>
<?php }else{ ?>
	<div class="banner">
			<a href="register.php" class="btn">Skráning!</a>

		<div class="login_div">
			<form action="<?php echo BASE_URL . 'blogg/index.php'; ?>" method="post" >
				<h2>Login</h2>
				<div style="width: 60%; margin: 0px auto;">
					<?php include('includes/errors.php') ?>
				</div>
				<input type="text" name="username" value="<?php echo $username; ?>" placeholder="Username">
				<input type="password" name="password"  placeholder="Password"> 
				<button class="btn" type="submit" name="login_btn">Skrá inn</button>
			</form>
		</div>
	</div>
<?php } ?>