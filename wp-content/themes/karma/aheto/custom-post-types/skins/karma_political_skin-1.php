<?php

use Aheto\Helper;

$ID = get_the_ID();

$classes   = [];
$classes[] = 'aheto-cpt-article';
$classes[] = 'aheto-cpt-article--' . $atts['layout'];
$classes[] = 'aheto-cpt-article--' . $atts['skin'];
$img_class = $atts['layout'] === 'slider' || $atts['layout'] === 'grid' ? 'js-bg' : '';

$terms_list = get_the_terms( get_the_ID(), $atts['terms'] );

if ( isset( $terms_list ) && ! empty( $terms_list ) ) {
	foreach ( $terms_list as $term ) {
		$classes[] = 'filter-' . $term->slug;
	}
}

$tag = isset( $atts['title_tag'] ) && ! empty( $atts['title_tag'] ) ? $atts['title_tag'] : 'h4';

/**
 * Set dependent style
 */
$shortcode_dir = get_template_directory_uri() . '/aheto/custom-post-types/';

$custom_css    = Helper::get_settings( 'general.custom_css_including' );
$custom_css    = ( isset( $custom_css ) && ! empty( $custom_css ) ) ? $custom_css : false;

if ( empty( $custom_css ) || ( $custom_css == "disabled" ) ) {
	wp_enqueue_style( 'karma-political-skin-1', $shortcode_dir . 'assets/css/karma_political_skin-1.css', null, null );
}

?>

<article class="<?php echo esc_attr( implode( ' ', $classes ) ); ?>">

    <div class="aheto-cpt-article__inner">
		<?php $isHasThumb = $this->getImage( $img_class, '', $atts['cpt_image_size'], true, false, $atts, 'cpt_' ); ?>

        <div class="aheto-cpt-article__content">

            <div class="aheto-cpt-article__content-header">
                <?php $this->getDate(); ?>
	            <?php $this->getTerms( $atts['terms'] ); ?>
			</div>

			<?php echo '<' . $tag . ' class="aheto-cpt-article__title">'; ?>
	            <a href="<?php the_permalink(); ?>">
	                <?php
						$title = get_the_title();
						echo $title;
					?>
	            </a>
			<?php echo '</' . $tag . '>'; ?>

			<?php $this->getExcerpt(); ?>

        </div>
    </div>

</article>
