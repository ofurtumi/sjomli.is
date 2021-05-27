<?php require_once( 'includes/registration_login.php') ?>
<?php
require_once("config.php");
require_once('includes/public_functions.php');
$PageTitle = "Blogg";

include_once("../header.php");
include("includes/banner.php")
?>
<?php $posts = getPublishedPosts(); ?>

    <div class="container">
    <!-- Page content -->
		<div class="content">
			<h2 class="content-title">Recent Articles</h2>
			<hr>
				<?php foreach ($posts as $post): ?>
					<div class="post" style="margin-left: 0px;">
						<img src="<?php echo 'static/images/' . $post['image']; ?>" class="post_image" alt="">

							<div class="post_info">
								<h3><a href="single_post.php?post-slug=<?php echo $post['slug']; ?>"><?php echo $post['title'] ?></a></h3>
								<div class="info">
									<span><?php echo date("F j, Y ", strtotime($post["created_at"])); ?></span>
								</div>
							</div>
							<?php if (isset($post["topic"]["name"])): ?>
							<a 
								href="<?php echo BASE_URL . 'blogg/filtered_posts.php?topic=' . $post['topic']['id'] ?>"
								class="btn category">
								<?php echo $post['topic']['name'] ?>
							</a>
						<?php endif ?>
						
					</div>
				<?php endforeach ?>		
		</div>
		<!-- // Page content -->

    </div>		

<?php include_once("../footer.php") ?>