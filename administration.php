<?php

/** Step 2 (from text above). */
add_action( 'admin_menu', 'createMQVMenuItem' );

/** Step 1. */
function createMQVMenuItem() {
	add_options_page( 'Listen To Quran Verses Settings', 'Listen To Quran Verses', 'manage_options', 'listen-to-quran-verses', 'mqvMenuOptions' );
}

/** Step 3. */
function mqvMenuOptions() {
	echo '<div class="wrap">';
	require_once( "admin-form.php" ) ;
	echo '</div>';
}

?>