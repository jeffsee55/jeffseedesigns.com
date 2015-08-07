<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/front', 'header'); ?>
  <?php get_template_part('templates/front', 'philosophy'); ?>
  <?php get_template_part('templates/front', 'services'); ?>
  <?php get_template_part('templates/front', 'contact'); ?>
  <?php get_template_part('templates/front', 'portfolio'); ?>
  <?php get_template_part('templates/front', 'about'); ?>
<?php endwhile; ?>
