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
		<a href="register.php"><div class="btn"><h3>Nýskráning</h3></div></a>
		<a href="login.php"><div class="btn"><h3>Skrá inn</h3></div></a>
	</div>
<?php } ?>