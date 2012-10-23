<?php

class Random_Ayah_Widget extends WP_Widget
{
  function Random_Ayah_Widget()
  {
    $widget_ops = array('classname' => 'Random_Ayah_Widget', 'description' => 'This widgets plays a random ayah every time the page is loaded');
    $this->WP_Widget('Random_Ayah_Widget', 'Random Ayah Widget', $widget_ops);
  }
 
  function form($instance)
  {
    $instance = wp_parse_args((array) $instance, array( 'title' => 'Random Ayah' ));
    $title = $instance['title'];
?>
  <p><label for="<?php echo $this->get_field_id('title'); ?>">Title: <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr($title); ?>" /></label></p>
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
 
    echo $before_widget;
    $title = empty($instance['title']) ? '' : apply_filters('widget_title', $instance['title']);
 
    if (!empty($title))
      echo $before_title . $title . $after_title;;
    // include widget scripts
    
   loadGeneralScripts();
   wp_enqueue_script(
		'mqv-widget-script'
		, plugins_url("/js/script.js", __FILE__)
		, array("jquery")
	);
    
    // Do Your Widgety Stuff Here...
?>

<div id="mqv-widget-information">
	<p id="mqv-widget-information-sourah-and-ayah"></p>
	<p id="mqv-widget-information-ayah-time"></p>
</div>
<div id="mqv-widget-mediaspace" style="display:none;"></div>
<div id="mqv-widget-replay" style="cursor: pointer; border-bottom: thin dashed; text-align: center; border-top: thin dashed;">Replay</div>
<script type='text/javascript'>
	// the flash player location
	var w_flashplayer = '<?php echo plugins_url("/", __FILE__)."../mediaplayer/player.swf";?>';
</script>


<?php
    echo $after_widget;
  }
}
add_action( 'widgets_init', create_function('', 'return register_widget("Random_Ayah_Widget");') );
