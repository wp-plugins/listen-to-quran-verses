<?php

require_once dirname(__FILE__)."/../helpers.php";

class Random_Recitation_Widget extends WP_Widget
{
  function Random_Recitation_Widget()
  {
    mqvLoadDictionary();
    $widget_ops = array('classname' => 'Random_Recitation_Widget', 'description' => 'This widgets plays a random Recitation every time the page is loaded');
    $this->WP_Widget('Random_Recitation_Widget', mqvTranslate('RANDOM_WIDGET_NAME'), $widget_ops);
    // load translated text
  }
 
  function form($instance)
  {
    global $dictionary;
    $instance = wp_parse_args((array) $instance, array( 'title' => mqvTranslate('RANDOM_WIDGET_DEFAULT_TITLE') ));
    $title = $instance['title'];
?>
  <p>
    <label for="<?php echo $this->get_field_id('title'); ?>">
    <?php echo mqvTranslate("TITLE"); ?>
    <input
	      class="widefat"
	      id="<?php echo $this->get_field_id('title'); ?>"
	      name="<?php echo $this->get_field_name('title'); ?>"
	      type="text" value="<?php echo esc_attr($title); ?>" />
    </label>
  </p>
<?php
  }
 
  function update($new_instance, $old_instance)
  {
    $instance = $old_instance;
    $instance['title'] = $new_instance['title'];
    return $instance;
  }
 
  function widget($args, $instance)
  {
    extract($args, EXTR_SKIP);
    global $dictionary;

    echo $before_widget;
    $title = empty($instance['title']) ? '' : apply_filters('widget_title', $instance['title']);
 
    $before_title = "<div style=\"direction: ". mqvTranslate('TEXT-DIRECTION') . "; \" >";
    $after_title = "</div>";
    if (!empty($title))
      echo $before_title . $title . $after_title;

    // Do Your Widgety Stuff Here...
?>
<div id="mqv-widget-waiting" style="height:20px; direction: <?php echo mqvTranslate('TEXT-DIRECTION'); ?> ;">
<?php echo mqvTranslate("PLEASE-WAIT"); ?>
</div>
<div id="mqv-widget-information" style="display:none; direction: <?php echo mqvTranslate('TEXT-DIRECTION'); ?> ;">
	<table>
		<tr>
			<td id="mqv-widget-reciter" colspan="3"></td>
		</tr>
		<tr class="mqv-widget-center">
			<td id="mqv-widget-verse" colspan="3"></td>
		</tr>
		<tr class="mqv-widget-center">
			<td id="mqv-widget-sourah"></td>
			<td id="mqv-widget-verse-nbr"></td>
			<td> ( <span id="mqv-widget-recitation-remaining-seconds"></span> )</td>
		</tr>
		<tr class="mqv-widget-center">
			<td colspan="3" id="mqv-widget-player-controller">
				<img id="mqv-widget-play" src="<?php echo plugins_url("/icons/play.png", __FILE__); ?>" alt="Play"/>
				<img id="mqv-widget-pause" src="<?php echo plugins_url("/icons/pause.png", __FILE__); ?>" alt="Pause"/>
				<img id="mqv-widget-stop" src="<?php echo plugins_url("/icons/stop.png", __FILE__); ?>" alt="Stop"/>
			</td>
		</tr>
		<tr class="mqv-widget-center">
			<td colspan="3" id="mqv-widget-get">
				<?php echo mqvTranslate("GET_RECITATION"); ?>
			</td>
		</tr>
	</table>
</div>
<div id="mqv-widget-mediaspace" style="display:none;"></div>
<script type='text/javascript'>
	// the flash player location
	var w_flashplayer = '<?php echo plugins_url("/", __FILE__)."../mediaplayer/player.swf";?>';
</script>


<?php
	// include widget scripts
   loadGeneralScripts();
   global $language;
   if( $language == "ar"){
   	?>
<script type='text/javascript'>
	// define the arabic language
	var w_isArabLang = true;
</script>
   	<?php 
   }

   wp_enqueue_script(
   		'mqv-widget-script'
		, plugins_url("/js/script.js", __FILE__)
		, array("jquery","mqvjqnoconflict")
	);

    echo $after_widget;
  }
}

add_action( 'widgets_init', create_function('', 'return register_widget("Random_Recitation_Widget");') );
