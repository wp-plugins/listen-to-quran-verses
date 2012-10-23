var ayahDurationTimer = null;

jQuery(document).ready(function(){
	
	w_sourah = Math.floor((Math.random()*114)+1);
	w_sourah3D = threeDigit(w_sourah);

	w_ayah = Math.floor((Math.random() * ayahPerSourah[w_sourah3D])+1);

	w_file = w_sourah3D + threeDigit(w_ayah) +".mp3";

	jwplayer('mqv-widget-mediaspace').setup({
	  'flashplayer': w_flashplayer,
	  'file': protocole + host + path + receiter + w_file,
	  'volume': '100',
	  //'plugins': 'revolt',
	  'controlbar': 'none',
	  'autostart': 'true',
	  'stretching': 'fill',
	  'width': '100%',
	  'height': '0'
	});
	
	jQuery("#mqv-widget-information-sourah-and-ayah").text(sourahNames[w_sourah-1] + " : " + w_ayah);
	jQuery("mqv-widget-mediaspace_wrapper").css("display","none");

	//Styling information zone
	jQuery("#mqv-widget-information").css("height","30px");
	jQuery("#mqv-widget-information-sourah-and-ayah").css("float","left");
	jQuery("#mqv-widget-information-ayah-time").css("float","right");
	
	// the jwPlayer object
	w_player = jwplayer('mqv-widget-mediaspace');
	
	w_player.onPlay(function(){
		jQuery("#mqv-widget-information-ayah-time").text( Math.floor( w_player.getDuration() ));
		if(ayahDurationTimer != null)
			clearInterval(ayahDurationTimer);
		ayahDurationTimer = setInterval(function(){
			var v = w_player.getDuration() - w_player.getPosition();
			v = Math.floor(v);
			jQuery("#mqv-widget-information-ayah-time").text(v);
		},1000);
	});
	w_player.onComplete(function(){
		clearInterval(ayahDurationTimer);
	});
});

jQuery("#mqv-widget-replay").click(function(){
	w_player.stop();
	w_player.play();
});
function threeDigit(nbr) {
	var tmp = "000" + nbr;
	return tmp.substr(tmp.length-3);
}

/*
	Configuring the URL source:
*/
/** SERVER CONFIGURATION **/
protocole = "http://";
host = "www.everyayah.com/";
path = "data/warsh/";
receiter = "warsh_ibrahim_aldosary_128kbps/";

/* ****** */