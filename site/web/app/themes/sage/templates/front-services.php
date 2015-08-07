<div class="section services">
  <div class="container">
    <div class="row">
      <?php if(get_field('service')): ?>
        <?php while(the_repeater_field('service')): ?>
          <div class="service-card">
            <img src="<?php the_sub_field('service_image'); ?>">
            <h3><?php the_sub_field('service_title'); ?></h3>
            <p><?php the_sub_field('service_description'); ?></p>
            <div class="labels">
              <?php if(have_rows('labels')): ?>
                <?php while(have_rows('labels')) : the_row(); ?>
                  <label><?php the_sub_field('label'); ?></label>
                <?php endwhile; ?>
              <?php endif; ?>
            </div>
          </div>
        <?php endwhile; ?>
      <?php endif; ?>
    </div>
  </div>
</div>
