/*
Main script file:

- init the player
- define function
- add event listeners
*/

/*## LOAD THE PLAYER   ##*/

/* ##################### */

// the jwPlayer object
player = null;
startAyah = 1;
endAyah = 1;
ayahRepeatCurrent = 1;
totalRepeatCurrent = 1;
totalAyah = 0;
currentTrackDuration = 0; // in milliseconde
repeatAyahDurationTimer = null;

// global variable to defined wether we need to log debug messages or not
debug = false;

/* ********* EVENTS ******** */

// When the document is ready we set the init values
jQuery(document).ready(function(){
	
	$ = jQuery.noConflict();
	
	jwplayer('mqv-mediaspace').setup({
	  //'flashplayer': flashplayer,
	  'file': file,
	  'controlbar': 'bottom',
	  'width': '100%',
	  'height': '24',
	  'modes': [
		{type: 'flash', src: flashplayer},
		{type: 'html5'}
	    ]
	});
	player = jwplayer('mqv-mediaspace');
	
	var sourahIdx = 1;
	for(var idx in sourahNames){
		sourahNames[idx] = threeDigit(sourahIdx) + ' - ' + sourahNames[idx];
		sourahIdx ++;
	}

	// default sourah is: Al Faatiha
	$("#sourah").val(sourahNames[0]);
	// change the sourah field to an autocomplete field
	$("#sourah").autocomplete({
		source: sourahNames
		, close: initElements
		, change: initElements
		, autoFocus: true
	}).focus(function(){
		setTimeout(function(){
			$("#sourah").select();
		}, 50);
	}).blur(initElements);

	
	defReciter = getDefaultReciter();
	defPath = getRecitationsSubfolder( defReciter );
	if( defPath === false ){
		localStorage.defaultReciter = null;
		defReciter = getDefaultReciter();
	}
	
	$("#reciter-name").text( defReciter );
	$("#reciters").val( defReciter );
	
	$("#reciters").autocomplete({
		source: prepareRecitersArray()
		//, close: setReciter
		, change: setReciter
		, autoFocus: true
	}).focus(function(){
		setTimeout(function(){
			$("#reciters").select();
		}, 50);
	});//.blur(setReciter);
	
	
	// init the total ayah for the current sourah variable and set it as a defaul value for the "end" field
	totalAyah = ayahPerSourah[ threeDigit( getSourahNumber( jQuery("#sourah").val() ) ) ];
	$("#ayah-e").val( totalAyah );

	// if supporting RTL is enabled, we put some correction
	if(isRTL){
		$(".ui-autocomplete").each(function(){
			$(this).css("direction","rtl");
		});
	}
	
	
	// correct refresh behaviour on the checkbox
	$("#ayah-repeat-all").removeAttr("checked");

	loadPlayList(false);

	// When the user start playing the select verses
	jQuery("#start-reading").click(function(){
		
		$("#selet-reciter-container").slideUp();
		
		// validating the form values
		if(!isValid())
			return;
		
		// load and play the playlist
		loadPlayList();
	});
	jQuery("#show-hide").click(function(){
		$("#mqv-advance-player-setting").slideToggle();
	});
	
	
	// on play event: fired every time an media is played (item from the playlist)
	player.onPlay(function(){
		mqvLog("Duration: "+ player.getDuration());
		if( $('input[name=repeat-after-reciter]:checked').val() == "yes" )
			currentTrackDuration = player.getDuration() * 1000; // in milliseconde
		else{
			currentTrackDuration = 0;
		}
		// moved to onPlaylistItem
	});
	
	
	// even fired each time a new playlist item is played (next, previous)
	player.onPlaylistItem(function(evt){
		mqvLog("EVENT:"+evt["index"]);
		// set the playlist index of the current played item
		ayahIndexPlay = evt["index"];
		
		// create the playlist item
		// initializing the pagging items for the playlist
		initPlayList();
		
		// marking the already played items in the playlist pagging
		mqvLog("******** Start marking the playlist ********");
		mqvLog("Current value: " + (parseInt(startAyah) + ayahIndexPlay));
		$(".playlist-item").each(function(){
			$(this).removeClass("playlist-item-played");
			var idx = parseInt( $(this).html() );
			mqvLog("Item value: " + idx);
			if(idx <= (parseInt(startAyah) + ayahIndexPlay))
				$(this).addClass("playlist-item-played");
		});
	});
	
	// event fired every time a media, playlist item, has finished playing
	player.onComplete(function(){
		
		// check if the current turn less than the repeat time, we repeat one more time
		if(ayahRepeatCurrent < parseInt(jQuery("#ayah-repeat-verse").val())){
			// if the repeating flag hasn't been reached yet, we play again the same media
			ayahRepeatCurrent++;
			playNext(true);
			return;
		}
		// initilize the repeat counter
		ayahRepeatCurrent = 1;
		
		// check which ayah we are playing within the interval 
		var currentAyah = parseInt(startAyah) + ayahIndexPlay;
		if(currentAyah <  parseInt(endAyah)) {
			// if we are still in the interval we play the next item
			playNext();
			return;
		}
		// if not we check for the "repeat all" checkbox
		if(jQuery("#ayah-repeat-all").is(':checked')){
			if(jQuery.isNumeric(jQuery("#ayah-repeat-all-nbr").val())){
				mqvLog("Field content is numeric");
				var limit = parseInt(jQuery("#ayah-repeat-all-nbr").val());
				mqvLog("Limit: "+limit);
				mqvLog("Repeat Current: "+ totalRepeatCurrent);
				if( limit == 0 || totalRepeatCurrent < limit){
					// if checked and the limit repeat isn't reached play again the same playlist 
					mqvLog("Will repeat");
					playNext();
					totalRepeatCurrent ++;
				}
			}
		}
		else{
			// if not, do nothing (a simple log message)
			mqvLog("Repeat all is off");
			totalRepeatCurrent = 1;	
		}
	});
	
	jQuery("#ayah-repeat-all").change(function(){
		// reset the limit counter
		totalRepeatCurrent = 1;
		// on repeat all checkbox changing state, if the checkbox is checked we enable the field to define a repetition limit
		// if not we diabled the field
		if(jQuery("#ayah-repeat-all").is(':checked')){
			$("#repeat-all-control").slideDown("normal");
			jQuery("#ayah-repeat-all-nbr").removeAttr("disabled");
		}
		else{
			jQuery("#ayah-repeat-all-nbr").attr("disabled","disabled");
			$("#repeat-all-control").slideUp("normal");
		}
			
	});
	
	jQuery("#ayah-e, #ayah-b").change(function(){
		
		if( getSourahNumber($("#sourah").val()) == 0 ){
			$(this).val(1);
			insertMsg($("#sourah"), dicoVars['VALID_SOURAH_SELECTION'], true);
			return;
		}
	
		var v = parseInt($(this).val());
		if(!$.isNumeric(v)){
			insertMsg($(this), dicoVars['START_END_FIELD_TYPE'], true);
			return;
		}
	
		if(v > totalAyah || v < 1){
			defaultVal = ( v < 1) ? 1 : totalAyah;
			$(this).val(defaultVal);
			mqvLog(dicoVars['START_END_INTERVAL']);
			insertMsg($(this), dicoVars['START_END_INTERVAL'] + totalAyah);
		}
		else
		{
			$(".mqv-interval-notes").remove();
		}
		mqvLog("Value: "+v);
	});
	
	jQuery("#ayah-repeat-all-nbr").change(function(){
		var v = parseInt($(this).val());
		if(!$.isNumeric(v)){
			insertMsg($(this), dicoVars['REPEAT_TIMES_FIELD_TYPE'], true);
			return;
		}
	
		if(v < 0){
			$(this).val(0);
			insertMsg($(this), dicoVars['REPEAT_ALL_TIME_MIN_VAL']);
		}
		else
		{
			$(".mqv-interval-notes").remove();
		}
		mqvLog("Value: "+v);
	});
	jQuery("#ayah-repeat-verse").change(function(){
	
		var v = parseInt($(this).val());
		if(!$.isNumeric(v)){
			insertMsg($(this), dicoVars['REPEAT_TIMES_FIELD_TYPE'], true);
			return;
		}
	
		if(v < 1){
			$(this).val(1);
			insertMsg($(this), dicoVars['REPEAT_TIME_MIN_VAL']);
		}
		else
		{
			$(".mqv-interval-notes").remove();
		}
		mqvLog("Value: "+v);
	});
	
	$('input[name=repeat-after-reciter]').change(function(){
		if($('input[name=repeat-after-reciter]:checked').val() == "yes")
			insertMsg($("#yes-repeat-after-reciter"), dicoVars['YES_REPEAT_AFTER_RECITER']);
	});
	
	$("#btn-show-every-sourah").click(function(){
		//alert("kilelr");
		$('#sourah').trigger("focus");
		$("#sourah").autocomplete("search", " ");
	});
	
	$("#btn-show-every-reciter").click(function(){
		$('#reciters').trigger("focus");
		$("#reciters").autocomplete("search", " ");
	});
	
	$("#change-reciter-toggle").click(function(){
		$("#selet-reciter-container").slideToggle();
	});
	
	
	/* *******  FUNCTIONS ******** */
	
	function setDefaultReciter( dr ){
		if(typeof(Storage)!=="undefined") {
			localStorage.defaultReciter = dr;
		}
	}
	
	function getDefaultReciter(){
		if(typeof(Storage)!=="undefined" && typeof localStorage.defaultReciter !== "undefined" && localStorage.defaultReciter != "null") {
			return localStorage.defaultReciter;
		} else {
			return getReciterFromSubfolder( receiter );
		}
	}
	
	function setReciter(){
		sr = $("#reciters").val();
		receiter = getRecitationsSubfolder( sr );
		if(receiter !== false){
			setDefaultReciter( sr );
			$("#reciter-name").text( sr );
			return;
		}
		insertMsg($("#btn-show-every-reciter"), dicoVars['SELECT_VALID_RECITER'], true);
		sr = $("#reciter-name").text();
		receiter = getRecitationsSubfolder( sr );
	}
	
	function getRecitationsSubfolder( sr ){
		sr = sr.replace(/ \(.*\)/, "");
		for(var idx in reciters){
			r = reciters[idx].name;
			if( r == sr ){
				return recitations[idx].subfolder + "/";
			}
		}
		return false;
	}
	
	function getReciterFromSubfolder( sbf ){
		for( var idx in recitations ){
			if( sbf == (recitations[idx].subfolder + "/") )
				return reciters[idx].name + " ( "+ recitations[idx].bitrate +" )";
		}
		return false;
	}
	
	function prepareRecitersArray(){
		tmp = [];
		for(var idx in reciters){
			r = reciters[idx].name + " ( "+ recitations[idx].bitrate + " )";
			tmp.push( r );
		}
		return tmp;
	}
	
	function showCountDown(){
		// remove all previous and hidden elements
		$("#mqv-countdown-notes").remove();
	
		var span = document.createElement("span");
		var $span = $(span);
		$span.addClass("mqv-note-field");
		$span.addClass("mqv-countdown-notes");
		$span.css("padding","15px");
		$span.attr("id","mqv-countdown-notes");
		
		// content management
		//$span.text(msg);
		var timeInSecond = currentTrackDuration/1000; 
		$span.text( Math.floor( timeInSecond ));
	
		$("#yes-repeat-after-reciter").parent().append(span);
		$span.topZIndex().fadeIn().delay(currentTrackDuration * 25 / 100).fadeOut(currentTrackDuration);
	
		if(repeatAyahDurationTimer != null)
			clearInterval(repeatAyahDurationTimer);
	
		repeatAyahDurationTimer = setInterval(function(){
			var v = parseInt($("#mqv-countdown-notes").text());
			v = v-1;
			if(v < 0 ) {
				clearInterval(repeatAyahDurationTimer);
				return;
			}
	
			v = Math.floor(v);
			$("#mqv-countdown-notes").text(v);
		},1000);
	}
	
	function playNext(rply){
	
		if( $('input[name=repeat-after-reciter]:checked').val() == "no" ){
			if(rply === true)
				player.play();
			else{
				player.playlistNext();
			}
			return;
		}
	
		if(currentTrackDuration > 0)
			showCountDown();
	
		setTimeout(function(){
			if(rply === true)
				player.play();
			else
				player.playlistNext();
		}
		,currentTrackDuration);
		
	}
	
	function loadPlayList(play){
		
		// initilize the list elements container array
		var URLs = [];
	
		// getting the starting ayah
		startAyah = parseInt(jQuery("#ayah-b").val());
		mqvLog("Starting from:"+ startAyah);
	
		// getting the ending ayah
		endAyah   = parseInt(jQuery("#ayah-e").val());
		mqvLog("Ending at:"+ endAyah);
		
		// stoping any previous playlist
		player.stop();
		
		/* ### GENERATING THE PLAYLIST ### */
		mqvLog("creating the list");
		var sourah = jQuery("#sourah").val();
		sourah = threeDigit( getSourahNumber( sourah ) );
		// loop from the start verse to the end and append the playlist holder variable with the adequated url
		for(i=startAyah; i<= endAyah;i++){
			URLs.push({
				file:protocole+host+path+receiter+sourah+threeDigit(i)+".mp3"
				, title: "Ayah"
			});
			mqvLog(protocole+host+path+receiter+sourah+threeDigit(i)+".mp3");
		}
		/* ### ### */
	
		// loading the playlist from the array content
		player.load(URLs);
		
		totalRepeatCurrent = 1;
		mqvLog(play !== false);
		if(play !== false)
			// start with the first item
			player.playlistItem(0);
	}
	
	function insertMsg(obj,msg, err){
		if(err !== true)
			err = false;
		// create span
		var span = document.createElement("span");
		var $span = $(span);
		$span.addClass("mqv-note-field");
		
		var noteTypeClass = err ? "mqv-error-field": "mqv-warning-field";
		
		$span.addClass(noteTypeClass);
		$span.addClass("mqv-interval-notes");
		$span.text(msg);
		//obj.parent().append(span);
		obj.after(span);
		$span.topZIndex().fadeIn().delay(2500).fadeOut(3000);
	}
	
	// initializing the form element on the change event of the sourah list
	function initElements(){
		if( getSourahNumber($("#sourah").val()) == 0 ){
			insertMsg($("#sourah"), dicoVars['VALID_SOURAH_SELECTION'], true);
			return;
		}
		jQuery("#ayah-b").val(1);
		totalAyah = ayahPerSourah[ threeDigit( getSourahNumber( jQuery("#sourah").val() ) ) ];
		$("#ayah-e").val( totalAyah );
	};
	
	// function to create the pagging playlist 
	function initPlayList(){
		// reset the previous pagging
		$("#playlist-items-indexes").html("");
		// add the first verse to the pagging element
		insertItemInPlaylist(startAyah);
		var prevDottes = false;
		var nextDottes = false;
		var currentAyah = (parseInt(startAyah) + ayahIndexPlay);
		var playlistSize = 8; // total / 2 
	
		for(i = startAyah + 1 ; i < endAyah; i++){
			// normaly for a list showing  17, so after the current we can show min 8 (17/2 +1) and the same for the one before
			// the element on play, but if the currently played is less than 8, than we can add some to the after, and so it is for the before element
			// can see quite complicated, if you need any better explication don't hesitate sending me a message, and I will gladly answer you question :)
			var correction = ( ( currentAyah - startAyah ) < playlistSize ) ? ( playlistSize - currentAyah + startAyah ) : 0 ;
	
			// after: if the elements after the current played one are more than the max we can show, we append the list by "..."
			if( (i - currentAyah) >= (playlistSize + correction) ){ // && ( ( endAyah - currentAyah ) > 9)
				if(!nextDottes){
					insertDottesInPlaylist();
					nextDottes = true;
				}
				continue;
			}
	
			correction = ( ( endAyah - currentAyah ) < playlistSize ) ? ( playlistSize - endAyah + currentAyah ) : 0 ;
			// before: if the elements before the current played one are more than the max we can show, we append the list by "..."
			if((currentAyah - i) >= (playlistSize + correction) ){
				if(!prevDottes){
					insertDottesInPlaylist();
					prevDottes = true;
				}
				continue;
			}
			insertItemInPlaylist(i);
		}
		// if the last verse is greater than the first we add it to the pagging element (this check is usefull if the start ayah is the same as the end ayah, so we don't show the same element twice)
		if(endAyah > startAyah)
			insertItemInPlaylist(endAyah);
	
		// than we assign the click event on each item of the pagging
		$(".playlist-item").click(function(){
			// if an item is click, we play the related verse after calculating which one it is
			var diff = parseInt(startAyah);
			var clickedVal = parseInt($(this).html());
			mqvLog("replay: " + (clickedVal - diff));
			player.playlistItem(clickedVal - diff);
		});
	}
	
	// create an html element as a pagging item, and append the pagging with it
	function insertItemInPlaylist (idx) {
		var item = document.createElement("td");
		var $item = $(item);
		$item.addClass("playlist-item").html( idx );
		$("#playlist-items-indexes").append($item);
	}
	
	
	// create the dottes and append them to the playlist pagging
	function insertDottesInPlaylist () {
		var item = document.createElement("td");
		var $item = $(item);
		$item.addClass("playlist-item-dottes").html("...");
		$("#playlist-items-indexes").append($item);
	}
	
	// convert a sourah string name to its order number
	function getSourahNumber(name){
		for(var idx in sourahNames)
		{
			if(name.toLowerCase() == sourahNames[idx].toLowerCase())
				return (parseInt(idx) +1);
		}
		return 0;
	}
	
	// return a number formatted in three digits, ex. takes 1 and gives back 001
	function threeDigit(nbr) {
		var tmp = "000" + nbr;
		return tmp.substr(tmp.length-3);
	}
	
	// validate the palyer form
	// if a condition is set, than its fine, if not we mark the field as not valid and return false
	// for the checks it must be quite easy to understand them without addional typing (start getting tired of it :) )
	function isValid(){
		valid = true;
		// if the selected sourah exist
		if( getSourahNumber($("#sourah").val()) == 0){
			$("#sourah").css("border","medium double red");
			insertMsg($("#sourah"), dicoVars['VALID_SOURAH_SELECTION'], true);
			valid = false;
		}
		else
			$("#sourah").css("border","");
	
		if( parseInt($("#ayah-b").val()) < 1 || parseInt($("#ayah-b").val()) > totalAyah){
			$("#ayah-b").css("border","medium double red");
			if(parseInt($("#ayah-b").val()) < 1){
				insertMsg($("#ayah-b"), dicoVars['START_AYAH_MIN_VAL'], true);
			}
			if(parseInt($("#ayah-b").val()) > totalAyah){
				insertMsg($("#ayah-b"), dicoVars['START_AYAH_MAX_VAL']+totalAyah, true);
			}
			valid = false;
		}
		else
			$("#ayah-b").css("border","");
		
		if( parseInt($("#ayah-e").val()) > totalAyah || parseInt($("#ayah-e").val()) < parseInt($("#ayah-b").val())){
			$("#ayah-e").css("border","medium double red");
			if(parseInt($("#ayah-e").val()) > totalAyah)
				insertMsg($("#ayah-e"), dicoVars['END_AYAH_MAX_VAL']+totalAyah, true);
			if(parseInt($("#ayah-e").val()) < parseInt($("#ayah-b").val()))
				insertMsg($("#ayah-e"), dicoVars['END_AYAH_MAX_VAL'] + "("+ $("#ayah-b").val() +")", true);
	
			valid = false;
		}
		else
			$("#ayah-e").css("border","");
	
		return valid;
	}
	
	/*
		this function is used to log the debugging messages
	*/
	function mqvLog(msg) {
		if(debug === true)
			console.log(msg);
	}

});
/*
	Configuring the URL source:
*/
/** SERVER CONFIGURATION **/
protocole = "http://";
host = "www.everyayah.com/";
path = "data/";
receiter = "khalefa_al_tunaiji_64kbps/";
/** ****** **/