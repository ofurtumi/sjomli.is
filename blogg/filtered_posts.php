<?php
include('config.php');
include('includes/public_functions.php');
if (isset($_GET['topic'])) {
    $topic_id = $_GET['topic'];
    $posts = getPublishedPostsByTopic($topic_id);
}
$PageTitle = getTopicNameById($topic_id);
include("../header.php");
?>
    <h1 class="content-title" style="text-align: center">Færslur um <u><?php echo getTopicNameById($topic_id); ?></u></h1>
<div class="content">
    <?php foreach ($posts as $post): ?>
        <div class="single-post">
            <h2><?php echo $post['title']; ?></h2>
            <?php echo html_entity_decode($post['body']); ?>
            <img src="<?php echo 'static/images/' . $post['image']; ?>">

            <div class="info">
                <span><?php echo date("j/n/Y ", strtotime($post["created_at"])); ?></span>
            </div>
        </div>
    <?php endforeach ?>
</div>
<?php include("../footer.php"); ?>