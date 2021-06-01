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

<div class="blogg" >
	<div class="single-post">
		<?php if ($post['published'] == false): ?>
			<h2 class="post-title">Það er ekki búið að birta þessa færslu</h2>
		<?php else: ?>
			<h2><?php echo $post['title']; ?></h2>
			<?php echo html_entity_decode($post['body']); ?>
			<img src="<?php echo 'static/images/' . $post['image']; ?>">
		<?php endif ?>
	</div>

	<div class="single-post-card">
		<h2>Umræðuefni</h2>
		<?php foreach ($topics as $topic): ?>
			<a 
				href="<?php echo BASE_URL . 'blogg/filtered_posts.php?topic=' . $topic['id'] ?>">
				<?php echo $topic['name']; ?>
			</a> 
		<?php endforeach ?>
	</div>
</div>

<?php include("../footer.php"); ?>