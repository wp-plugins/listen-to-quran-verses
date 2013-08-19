<?php

function mqvTranslate( $text ){
	global $dictionary, $language, $default_dictionary;
	
	// if default dico is empty, something is going wrong !!! 
	if( empty($default_dictionary) || !isset( $default_dictionary[ $text ] ) ){
		throw new Exception( "Texts dictionary is empty, or no default value for the requested text: $text" );
	}
	// if the current language contain the requested text we returned
	if( isset( $dictionary[ $text ] ) ) {
		return $dictionary[ $text ];
	}
	// if not, we log it and return the default, english, text
	file_put_contents( dirname( __FILE__ ) . "/missing-text.txt", "$text\t\t:\t\tlocal-$language\n", FILE_APPEND );
	return $default_dictionary[ $text ];
}

function setLanguage( $new_lang = null ){
	global $language;
	
	if( !empty( $new_lang ) ){
		update_option( "mqv-language", $new_lang );
		$lang = $new_lang;
	} else {
		$lang = get_option( "mqv-language" );
	}
	
	$language = ( $lang == false ) ? "auto" : $lang;
}

function mqvLoadDictionary() {
	global $language, $dictionary, $default_dictionary;
	setLanguage();

	if( $language == "auto" ) 
		$language = get_locale();

	// load default texts (english)
	$file 	= "languages/local-en.php";
	require_once( $file );
	// init default js dictionnary file 
	$jsDico = '/js/dictionary-en.js';

	// check if the language dictionnary file is available, then load it if exist 
	if( is_file( dirname( __FILE__ )."/languages/local-{$language}.php") ) {
		require_once( "languages/local-{$language}.php" );
		// if configured language exist, than we set the corresponding js file to load
		$jsDico = "/js/dictionary-{$language}.js";
	}
	// load js dico file 
	wp_enqueue_script(
		'mqvdictionarylatinscript'
		, plugins_url($jsDico, __FILE__)
		, array("mqvdictionaryscript")
		, true
	);
}

/**
This function include the necessary scripts for the plugin to work properly
*/
function loadGeneralScripts() {
	wp_enqueue_script('jquery');
	
	wp_enqueue_script(
		'mqvjqnoconflict'
		, plugins_url('/js/noConflict.js', __FILE__)
		, array("jquery")
		, true
	);
	// load javascript files
	wp_enqueue_script(
		'mqvdictionaryscript'
		, plugins_url('/js/dictionary.js', __FILE__)
		, array()
		, true
	);
	wp_enqueue_style(
		'mqvjqautocomplete'
		, plugins_url('/css/ui-lightness/jquery-ui-1.9.0.custom.css', __FILE__)
		, array()
		, true
	);
	wp_enqueue_script(
		'mqvjqtozindex'
		, plugins_url('/js/jquery.topzindex.min.js', __FILE__)
		, array("jquery","mqvjqnoconflict")
		, true
	);
	wp_enqueue_script(
		'mqvmediaplayerscript'
		, plugins_url('/mediaplayer/jwplayer.js', __FILE__)
		, array()
		, true
	);
}

?>