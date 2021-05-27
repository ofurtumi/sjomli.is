<?php
include('config.php');
include('includes/public_functions.php');
if (isset($_GET['topic'])) {
    $topic_id = $_GET['topic'];
    $posts = getPublishedPostsByTopic($topic_id);
}
$PageTitle = $_GET['topic'];
include("../header.php");
?>
<div class="container">
    <div class="content">
        <h2 class="content-title">
            Articles on <u><?php echo getTopicNameById($topic_id); ?></u>
        </h2>
        <hr>
        <?php foreach ($posts as $post): ?>
            <div class="post" style="margin-left: 0px;">
                <img src="<?php echo BASE_URL . 'blogg/static/images/' . $post['image']; ?>" class="post_image" alt="">
                <div class="post_info">
                    <h3><a href="single_post.php?post-slug=<?php echo $post['slug']; ?>"><?php echo $post['title'] ?></a></h3>
                    <div class="info">
                        <span><?php echo date("F j, Y ", strtotime($post["created_at"])); ?></span>
                        <span class="read_more">Read more...</span>
                    </div>
                </div>
            </div>
        <?php endforeach ?>
    </div>
</div>
<?php include("../footer.php"); ?>