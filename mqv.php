<?php
/*
Plugin Name: Listen to Quran Verses
Plugin URI: http://listenquran.madev.org/
Description: This plugin let's you easily add Quran to your website with a flexible way to help people memorize its verses, and a very simple, easy to integrate within the current theme, and fully customizable interface supporting LTR as well as RTL design form. demo on http://listenquran.madev.org/
Version: 2.2.2
Author: Larbi Abu Romaïssae
Author URI: http://www.madev.org
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

require_once "helpers.php";

$language = "en";
$dictionary = array();
$default_dictionary = array();

add_filter('the_content', 'setPlayerForm');
function setPlayerForm ($content)
{
	// if the plugin is activated we put the form player only in the where where it was specified with {QuranVerses}
	if(preg_match("/{QuranVerses}/", $content))
	{
		// load javascript files
		loadGeneralScripts();
		wp_enqueue_script(
			'mqvscript'
			, plugins_url('/js/script.js', __FILE__)
			, array("jquery","jquery-ui-core","jquery-ui-autocomplete","mqvjqnoconflict")
		);
		// load translated text
		mqvLoadDictionary();
		// read the form html 
		$html = file_get_contents(plugin_dir_path(__FILE__)."form.html");
		
		preg_match_all("#_!_(.+?(?=_!_))_!_#", $html,$m);
		foreach( $m[0] as $idx => $val ) {
			$m[1][$idx] = mqvTranslate( $m[1][$idx] );
		}
		$html = str_replace($m[0],$m[1],$html);
		
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

include_once "widget/widget.php";
include_once "administration.php";

?>
