<?php
/*
Plugin Name: Listen to Quran Verses
Plugin URI: http://listenquran.wadakkir.org/
Description: This plugin let's you easily add Quran to your website with a flexible way to help people memorize its verses, and a very simple, easy to integrate within the current theme, and fully customizable interface supporting LTR as well as RTL design form. demo on http://www.wadakkir.org/
Version: 1.1.1
Author: Larbi Abu Romaïssae
Author URI: http://aburomaissae.wadakkir.org
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

add_filter('the_content', 'setPlayerForm');
function setPlayerForm ($content)
{
	// if the plugin is activated we put the form player only in the where where it was specified with {QuranVerses}
	if(preg_match("/{QuranVerses}/", $content))
	{
		// load javascript files
		loadScripts();
		// read the form html 
		$html = file_get_contents(plugin_dir_path(__FILE__)."form.html");
		// appending the form html by a placeholder for the player
		$html .= file_get_contents(plugin_dir_path(__FILE__)."playerHolder.html");
		
		// getting the pluging url
		$pluginsURL = plugins_url("", __FILE__);
		// replacing plugin url placeholder by the original URL
		$html = str_replace("__PLUGINS_URL__","$pluginsURL", $html);
		
		// replace the plugin tag by the html result for showing the player and the form
		$content = str_replace('{QuranVerses}', $html, $content);
	}
	return $content;
}


/**
This function include the necessary scripts for the plugin to work properly
*/
function loadScripts() {
	wp_enqueue_script('jquery');
	
	wp_enqueue_script(
		'mqvjqnoconflict'
		, plugins_url('/js/noConflict.js', __FILE__)
		, array("jquery")
	);
	// load javascript files
	wp_enqueue_script(
		'mqvdictionaryscript'
		, plugins_url('/js/dictionary.js', __FILE__)
	);
	if(get_locale() == "ar" || true) {
		wp_enqueue_script(
			'mqvdictionaryarscript'
			, plugins_url('/js/dictionary-ar.js', __FILE__)
		);
		wp_enqueue_script(
			'mqvtranslatescript'
			, plugins_url('/js/translate.js', __FILE__)
		);
	}
	else
		wp_enqueue_script(
			'mqvdictionarylatinscript'
			, plugins_url('/js/dictionary-latin.js', __FILE__)
		);
	wp_enqueue_style(
		'mqvjqautocomplete'
		, plugins_url('/css/ui-lightness/jquery-ui-1.9.0.custom.css', __FILE__)
	);
	wp_enqueue_script(
		'mqvjqautocomplete'
		, plugins_url('/js/jquery-ui-1.9.0.autocomplete.js', __FILE__)
		, array("jquery")
	);
	wp_enqueue_script(
		'mqvmediaplayerscript'
		, plugins_url('/mediaplayer/jwplayer.js', __FILE__)
	);
	wp_enqueue_script(
		'mqvscript'
		, plugins_url('/js/script.js', __FILE__)
		, array("mqvjqautocomplete","jquery")
	);
}
?>
