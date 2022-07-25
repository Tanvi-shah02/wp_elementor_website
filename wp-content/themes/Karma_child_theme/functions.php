<?php
/**
 * The template includes necessary functions for theme.
 *
 * @package karma
 * @since 1.0.0
 */


if (! function_exists('karma_child_scripts')) {
    function karma_child_scripts(){
    	
		 // register style
        wp_enqueue_style('karma-child-css', get_stylesheet_directory_uri() . '/style.css');

    	
    }
}
add_action( 'wp_enqueue_scripts', 'karma_child_scripts');