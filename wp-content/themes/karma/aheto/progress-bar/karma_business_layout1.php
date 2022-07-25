<?php
/**
 * The Progress Bar Shortcode.
 *
 * @since      1.0.0
 * @package    Aheto
 * @subpackage Aheto\Shortcodes
 * @author     Karma <info@karma.com>
 */

use Aheto\Helper;

extract($atts);

$this->generate_css();

// Wrapper.
$this->add_render_attribute('wrapper', 'id', $element_id);
$this->add_render_attribute('wrapper', 'class', $this->the_custom_classes());
$this->add_render_attribute('wrapper', 'class', 'aheto-progress__business-circle');

/**
 * Set dependent style
 */
$shortcode_dir = get_template_directory_uri() . '/aheto/progress-bar/';
$custom_css    = Helper::get_settings('general.custom_css_including');
$custom_css    = (isset($custom_css) && !empty($custom_css)) ? $custom_css : false;
if ( empty($custom_css) || ($custom_css == "disabled") ) {
	wp_enqueue_style('karma-business-progress-bar-layout1', $shortcode_dir . 'assets/css/karma_business_layout1.css', null, null);
}

?>
<?php $def = 100 - absint($percentage); ?>
<div <?php $this->render_attribute_string('wrapper'); ?>>

	<div class="aheto-progress aheto-progress--chart t-center">

		<div class="aheto-progress__chart-holder">

			<svg class="aheto-progress__chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">
				<circle class="aheto-progress__chart-bg" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"/>
				<circle class="aheto-progress__chart-circle js-chart-circle"
						stroke-dasharray="<?php echo absint($percentage); ?>, <?php echo absint($def); ?>" fill="none"
						cx="16.91549431"
						cy="16.91549431" r="15.91549431"/>
			</svg>
			<span class="aheto-progress__chart-symbol">
					<span class="js-counter">
						<?php echo absint($percentage); ?>
					</span>
				</span>
		</div>

		<?php
		// Heading.
		if ( !empty($heading) ) {
			echo '<h5 class="aheto-progress__title">' . wp_kses($heading, 'post') . '</h5>';
		}

		// Description.
		if ( !empty($description) ) {
			echo '<p class="aheto-progress__desc">' . wp_kses($description, 'post') . '</p>';
		}
		?>

	</div>

</div>

