<?php require_once( 'includes/registration_login.php') ?>
<?php
require_once("config.php");
require_once('includes/public_functions.php');
$PageTitle = "Blogg";
$topics = getAllTopics();

include_once("../header.php");
?>
<?php $posts = getPublishedPosts(); ?>

    <div class="blogg">
    <!-- Page content -->
    	<h1 class="content-title">Nýlegar Færslur</h1>
		<?php include("includes/banner.php") ?>

		<div class="content">
			<?php foreach ($posts as $post): ?>
				<div>
					<div class="single-post">
						<?php if ($post['published'] == false): ?>
							<h2 class="post-title">Það er ekki búið að birta þessa færslu</h2>
						<?php else: ?>
							<h2><?php echo $post['title']; ?></h2>
							<div class="scrollbar">
								<div class="main-text">
									<?php echo html_entity_decode($post['body']); ?>
								</div>
							</div>
							<img src="<?php echo 'static/images/' . $post['image']; ?>">
						<?php endif ?>
						<?php if (isset($post["topic"]["name"])): ?>
							<a href="<?php echo BASE_URL . 'blogg/filtered_posts.php?topic=' . $post['topic']['id'] ?>"class="category">
								<?php echo $post['topic']['name'] ?>
							</a>
						<?php endif ?>
		
						<div class="info">
							<span><?php echo date("j/n/Y ", strtotime($post["created_at"])); ?></span>
						</div>
					</div>

				</div>
			<?php endforeach ?>		
		</div>
		
		<div class="sidebar-content">
			<div class="category-card">
				<h2>Umræðuefni</h2>
				<?php foreach ($topics as $topic): ?>
					<a 
						href="<?php echo BASE_URL . 'blogg/filtered_posts.php?topic=' . $topic['id'] ?>">
						<?php echo $topic['name']; ?>
					</a> 
				<?php endforeach ?>
			</div>
			<div class="stat-card">
				<h2>Tölfræði</h2>
				<p>síðustu 10 færsla</p>
				<div class="single-stat">
					Skap - 70%
				</div>
				<div class="single-stat">
					Sjálfsmynd - 63%
				</div>
				<div class="single-stat">
					Fit - 24%
				</div>
			</div>
		</div>
    </div>		

<?php include_once("../footer.php") ?>