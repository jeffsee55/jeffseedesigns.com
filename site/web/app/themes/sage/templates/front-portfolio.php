<div id="portfolio" class="section portfolio">
  <div class="labels">
    <label id="Print" class="filter">Print</label>
    <label id="Wordpress" class="filter">Wordpress Themes</label>
    <label id="Rails" class="filter">Rails</label>
    <label id="Business" class="filter">Business Cards</label>
    <label id="Stationary" class="filter">Stationary</label>
  </div>
  <ul class="portfolio-slider">
    <?php if(get_field('portfolio')) : ?>
      <?php while(the_repeater_field('portfolio')): ?>
        <li class="<?php echo implode(' ', get_sub_field('categories')); ?>">
          <a data-lightbox="image" data-title="<?php the_sub_field('item_title'); ?>" href="<?php the_sub_field('item_image'); ?>">
            <img class="card" src="<?php the_sub_field('item_image'); ?>">
          </a>
          <i class="expand material-icons">expand_less</i>
          <div class="caption">
            <div>
              <?php if(get_sub_field('item_link')) : ?>
                <a href="<?php the_sub_field('item_link'); ?>">
                  <div class="title"><h3><?php the_sub_field('item_title'); ?></h3></div>
                </a>
              <?php else : ?>
                <div class="title"><h3><?php the_sub_field('item_title'); ?></h3></div>
              <?php endif; ?>
              <div class="body">
                <?php if(have_rows('labels')) : ?>
                  <?php while(have_rows('labels')) : the_row(); ?>
                    <label><?php the_sub_field('label'); ?></label>
                  <?php endwhile; ?>
                <?php endif; ?>
              </div>
            </div>
          </div>
        </li>
      <?php endwhile; ?>
    <?php endif; ?>
  </ul>
</div>
