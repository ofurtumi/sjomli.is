<?php if (isset($_SESSION['user']['username'])) { ?>
	<div class="logged_in_info">
		<span>Halló <?php echo $_SESSION['user']['username'] ?></span>
		|
		<span><a href="logout.php">Skrá út</a></span>
		<br>
		<?php if ( in_array($_SESSION['user']['role'], ["Admin", "Author"])) { ?>
				<a href="/blogg/admin/dashboard.php">Admin</a>
		<?php } ?>
		
	</div>
<?php }else{ ?>
	<div class="banner">
			<a href="register.php" class="btn">Nýskráning</a>
			<a href="login.php" class="btn">Skrá inn</a>
	</div>
<?php } ?>