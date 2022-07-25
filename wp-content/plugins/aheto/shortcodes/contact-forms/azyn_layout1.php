<?php
/**
 * Contact Forms default templates.
 *
 * @since      1.0.0
 * @package    Aheto
 * @subpackage Aheto\Shortcodes
 * @author     Upqode <info@upqode.com>
 */

use Aheto\Helper;

extract( $atts );

$this->generate_css();

// Wrapper.
$this->add_render_attribute( 'wrapper', 'id', $element_id );
$this->add_render_attribute( 'wrapper', 'class', 'aheto__cf--azyn-simple' );
$this->add_render_attribute( 'wrapper', 'class', $this->the_custom_classes() );

/**
 * Set dependent style
 */
$shortcode_dir = aheto()->plugin_url() . 'shortcodes/contact-forms/';
$custom_css    = Helper::get_settings( 'general.custom_css_including' );
$custom_css    = ( isset( $custom_css ) && ! empty( $custom_css ) ) ? $custom_css : false;
if ( (empty( $custom_css ) || ( $custom_css == "disabled" ) ) && !Helper::is_Elementor_Live()) {
	wp_enqueue_style( 'azyn-contact-forms-layout1', $shortcode_dir . 'assets/css/azyn_layout1.css', null, null );
}
if ( !Helper::is_Elementor_Live()) {
	wp_enqueue_script('azyn-contact-forms-layout1-js', $shortcode_dir . 'assets/js/azyn_layout1.min.js', array('jquery'), null);
} ?>

<div <?php $this->render_attribute_string( 'wrapper' ); ?>>

	<?php if ( !empty( $contact_form ) ) : ?>
		<div class="<?php echo Helper::get_button($this, $atts, 'azyn_form_', true); ?>">
			<?php echo do_shortcode( '[contact-form-7 id="' . esc_attr( $contact_form ) . '"]' ); ?>
		</div>
	<?php endif; ?>

</div>