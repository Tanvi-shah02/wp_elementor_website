<?php

use Aheto\Helper;
add_action( 'aheto_before_aheto_features-single_register', 'azyn_features_single_layout1' );

/**
 * Features Single
 */

function azyn_features_single_layout1( $shortcode ) {

	$preview_dir = '//assets.aheto.co/features-single/previews/';

	$shortcode->add_layout( 'azyn_layout1', [
		'title' => esc_html__( 'Azyn Modern', 'azyn' ),
		'image' => $preview_dir . 'azyn_layout1.jpg',
	] );

	aheto_demos_add_dependency( ['s_heading', 't_heading', 'use_heading' ], [ 'azyn_layout1'], $shortcode );

	$shortcode->add_dependecy( 'azyn_images', 'template', 'azyn_layout1' );
	$shortcode->add_dependecy( 'azyn_color', 'template', 'azyn_layout1' );
	$shortcode->add_dependecy( 'azyn_border_color', 'template', 'azyn_layout1' );

	$shortcode->add_params( [
		'azyn_images'     => [
			'type'    => 'attach_images',
			'heading' => esc_html__('Add images', 'azyn' ),
		],
		'azyn_color'   => [
			'type'      => 'colorpicker',
			'heading'   => esc_html__( 'Overlay color', 'azyn' ),
			'grid'      => 6,
			'default'   => '',
			'selectors' => [
				'{{WRAPPER}} .aheto-features-block__image::before' => 'background: {{VALUE}}',
			],
		],
		'azyn_border_color'   => [
			'type'      => 'colorpicker',
			'heading'   => esc_html__( 'Border color', 'azyn' ),
			'grid'      => 6,
			'default'   => '',
			'selectors' => [
				'{{WRAPPER}} .aheto-features--azyn-modern' => 'border-color: {{VALUE}}',
			],
		],
	] );

	\Aheto\Params::add_image_sizer_params($shortcode, [
		'group'      => esc_html__( 'Azyn Images Size', 'azyn' ),
		'prefix'     => 'azyn_',
		'dependency' => ['template', ['azyn_layout1']]
	]);
}
