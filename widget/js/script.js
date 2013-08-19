var w_player = null;
var w_loader = false;
var autoStart = false;

jQuery(document).ready(function(){
	
	$ = jQuery.noConflict();
	
	jwplayer('mqv-widget-mediaspace').setup({
	  'flashplayer': w_flashplayer,
	  'volume': '100',
	  'controlbar': 'none',
	  'autostart': 'true',
	  'stretching': 'fill',
	  'width': '100%',
	  'height': '0'
	});

	// the jwPlayer object
	w_player = jwplayer('mqv-widget-mediaspace');

	w_player.onTime(function(v1){
		if(!w_loader)
			return;
		var v = v1.duration - v1.position;
		var date = new Date(null);
		date.setSeconds(v);
		var time = date.toTimeString().substr(3, 5);
		jQuery("#mqv-widget-recitation-remaining-seconds").text(time);
	});
	
	w_player.onBeforePlay(function(){
		$("#mqv-widget-waiting").slideUp('500').delay().after(function(){
			$("#mqv-widget-information").slideDown();
		});
	});
	w_player.onBufferChange(function(pct){
		if(pct.bufferPercent == 100)
			w_loader = true;
		jQuery("#mqv-widget-recitation-remaining-seconds").text(pct.bufferPercent + '%');
	});
	
	jQuery("#mqv-widget-get").click(function(){
		w_player.stop();
		$("#mqv-widget-information").slideUp('500').delay().after(function(){
			$("#mqv-widget-waiting").slideDown().delay().after(function(){
				autoStart = true;
				getRecitation();
			});
		});
	});
	getRecitation();
});

function getRecitation(){
//	w_file = $.get();
	url = "http://dev.madev.org/WP/listenquran/recitations/getRecitation.php";
	url += (typeof(w_isArabLang) != "undefined" && w_isArabLang === true) ? "?lang=ar":"";

	$.ajax({
		url: url,
		dataType: 'jsonp',
		success: function(data) {
			w_file = eval(data);
			startEngine(w_file);
		}
	});
}

function startEngine(w_file){
	// set the reciter name:
	$("#mqv-widget-reciter").text( w_file.reciter );
	$("#mqv-widget-verse").text( w_file.verse );
	$("#mqv-widget-sourah").text( w_file.sourah );
	$("#mqv-widget-verse-nbr").text( w_file.verse_nbr );
	
	jQuery("mqv-widget-mediaspace_wrapper").css("display","none");

	//Styling information zone
	jQuery("#mqv-widget-information tr.mqv-widget-center td").css("text-align","center");
	jQuery("#mqv-widget-information table").css("width","100%");
	jQuery("#mqv-widget-information td, #mqv-widget-information img, #mqv-widget-get").css("padding","5px");
	jQuery("#mqv-widget-information table td, #mqv-widget-information table img, #mqv-widget-get").css("vertical-align","middle");	
	jQuery("#mqv-widget-information img, #mqv-widget-get").css("cursor","pointer");
	
	jQuery("#mqv-widget-reciter").css("text-align","inherit");
	
	jQuery("#mqv-widget-player-controller").css("direction","ltr");
	
	w_player.load(w_file.url);
	if (!autoStart)
		w_player.pause();
}

jQuery("#mqv-widget-play").click(function(){
	w_player.play(true);
});

jQuery("#mqv-widget-pause").click(function(){
	w_player.pause(true);
});

jQuery("#mqv-widget-stop").click(function(){
	w_player.stop();
});

function threeDigit(nbr) {
	var tmp = "000" + nbr;
	return tmp.substr(tmp.length-3);
}
