<?php
include('config.php');
include('includes/public_functions.php');
if (isset($_GET['post-slug'])) {
    $post = getPost($_GET['post-slug']);
}
$topics = getAllTopics();
$PageTitle = $post["title"];
include("../header.php");
?>

<div class="container">
<div class="content" >
		<div class="post-wrapper">
			<div class="full-post-div">
			<?php if ($post['published'] == false): ?>
				<h2 class="post-title">Það er ekki búið að birta þessa færslu</h2>
			<?php else: ?>
				<h2 class="post-title"><?php echo $post['title']; ?></h2>
				<div class="post-body-div">
					<?php echo html_entity_decode($post['body']); ?>
				</div>
			<?php endif ?>
			</div>
			
			<!-- comments section -->
			<!--  coming soon ...  -->
		</div>

		<!-- post sidebar -->
		<div class="post-sidebar">
			<div class="card">
				<div class="card-header">
					<h2>Topics</h2>
				</div>
				<div class="card-content">
					<?php foreach ($topics as $topic): ?>
						<a 
							href="<?php echo BASE_URL . 'blogg/filtered_posts.php?topic=' . $topic['id'] ?>">
							<?php echo $topic['name']; ?>
						</a> 
					<?php endforeach ?>
				</div>
			</div>
		</div>
	</div>
</div>

<?php include("../footer.php"); ?>