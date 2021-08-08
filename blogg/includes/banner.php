<?php if (isset($_SESSION['user']['username'])) { ?>
	<div class="banner">
		<!--<span>Notandi: < ?php echo $_SESSION['user']['username'] ?></span>!-->
		<a href="logout.php"><div class="btn"><h3>Skrá út</h3></div></a>
		<a href="/blogg/admin/dashboard.php"><div class="btn"><h3>Stjórnborð</h3></div></a>
	</div>
<?php }else{ ?>
	<div class="banner">
		<a href="register.php"><div class="btn"><h3>Nýskráning</h3></div></a>
		<a href="login.php"><div class="btn"><h3>Skrá inn</h3></div></a>
	</div>
<?php } ?>