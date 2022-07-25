<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', '' );

/** MySQL database username */
define( 'DB_USER', '' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'doj/x&_lKmT]eAMohq*z}5S(/5pfp{Ek68~uOK>&WdO(SBG@4KC&C?`m-MRnKaK(' );
define( 'SECURE_AUTH_KEY',  '9D{?6OsEm`wTIuV:es{(Q[AP?v7y KgOTg0z1IUT#EX~G&I[ `s|lflqT89qG}~,' );
define( 'LOGGED_IN_KEY',    '1kT<SXg`w8Nx-DZh+74+dviGo=TpK12/:TCOCk3rDfhZ5$kw<H[$_7+ZUY~knDGk' );
define( 'NONCE_KEY',        '[f`)FWMkt?[Wmwkf9}Io+J`-c[-1QO]efNT6Q,0y=`4Qvl@Kd=m]$3u@nQHJ-px&' );
define( 'AUTH_SALT',        'et*40Q#y1A7Zul[P%SuU{{5P[.I<[r0#i7M16gk8*.?[K2}^#AG>M0)R^3oUho_v' );
define( 'SECURE_AUTH_SALT', '/ziqJBn}}9{WAt=^x +6nhr]@U` d[B1sx23gcpLXAn_j?_/GVPKlfB0;g]L=B?4' );
define( 'LOGGED_IN_SALT',   '$$%EHeUKdgU=Or,lnF jz*E$tU+;NF)=v!M CzRs-F(Z+*~psLlmCAF1~SL{}#OI' );
define( 'NONCE_SALT',       'FdcJu=-::V0Vuj=5H~%5|rK57v+Hps>$YZHm9X?/=U/H,fy=7fHSLb*V|XQE9oQ=' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
define('WP_MEMORY_LIMIT', '256M');
set_time_limit(300);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
