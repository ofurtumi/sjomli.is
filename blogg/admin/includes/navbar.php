<div class="header">
	<div class="logo">
		<a href="<?php echo BASE_URL .'blogg/admin/dashboard.php' ?>">
			<h1>Admin</h1>
		</a>
	</div>
	<div class="user-info">
		<span><?php echo $_SESSION['user']['username'] ?></span> &nbsp; &nbsp; <a href="<?php echo BASE_URL . 'blogg/index.php'; ?>">Blogg</a>&nbsp; &nbsp; <a href="<?php echo BASE_URL . 'blogg/logout.php'; ?>" class="logout-btn">logout</a>
	</div>
</div>