/*
Main script file:

- init the player
- define function
- add event listeners
*/

/*## LOAD THE PLAYER   ##*/
jwplayer('mediaspace').setup({
  'flashplayer': flashplayer,
  'file': file,
  'controlbar': 'bottom',
  'width': '100%',
  'height': '24'
});
/* ##################### */

// the jwPlayer object
player = jwplayer('mediaspace');
startAyah = 1;
endAyah = 1;
ayahRepeatCurrent = 1;
totalAyah = 0;

// global variable to defined wether we need to log debug messages or not
debug = true;

/* ********* EVENTS ******** */

// When the document is ready we set the init values
jQuery(document).ready(function(){
	// default sourah is: Al Faatiha
	$("#sourah").val(sourahNames[0]);
	// change the sourah field to an autocomplete field
	$("#sourah").autocompleteArray(sourahNames, {
		onItemSelect: initElements
		,autoFill:true
	});
	
	// init the total ayah for the current sourah variable and set it as a defaul value for the "end" field
	totalAyah = ayahPerSourah[ threeDigit( getSourahNumber( jQuery("#sourah").val() ) ) ];
	$("#ayah-e").val( totalAyah );
});

// When the user start playing the select verses
jQuery("#start-reading").click(function(){
	
	// validating the form values
	if(!isValid())
			return;

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
	// start with the first item
	player.playlistItem(0);
});


// on play event: fired every time an media is played (item from the playlist)
player.onPlay(function(){
	mqvLog("Current: "+ (parseInt(startAyah) + ayahIndexPlay));
	// create the playlist item
	// initializing the pagging items for the playlist
	initPlayList();
	
	// marking the already played items in the playlist pagging
	$(".playlist-item").each(function(){
		$(this).removeClass("playlist-item-played");
		var idx = parseInt( $(this).html() );
		if(idx <= (parseInt(startAyah) + ayahIndexPlay))
			$(this).addClass("playlist-item-played");
	});
});


// even fired each time a new playlist item is played (next, previous)
player.onPlaylistItem(function(evt){
	mqvLog("EVENT:"+evt["index"]);
	// set the playlist index of the current played item
	ayahIndexPlay = evt["index"];
});

// event fired every time a media, playlist item, has finished playing
player.onComplete(function(){
	
	// check if the current turn less than the repeat time, we repeat one more time
	if(ayahRepeatCurrent < jQuery("#ayah-repeat-verse").val()){
		// if the repeating flag hasn't been reached yet, we play again the same media
		ayahRepeatCurrent++;
		player.play();
		return;
	}
	// initilize the repeat counter
	ayahRepeatCurrent = 1;
	
	// check which ayah we are playing within the interval 
	var currentAyah = parseInt(startAyah) + ayahIndexPlay;
	if(currentAyah <  parseInt(endAyah)) {
		// if we are still in the interval we play the next item
		player.playlistNext();
		return;
	}
	// if not we check for the "repeat all" checkbox
	if(jQuery("#ayah-repeat-all").is(':checked'))
		// if check: play again the same playlist
		player.playlistNext();
	else
		// if not, do nothing (a simple log message)
		mqvLog("Repeat all is off");
});


/* *******  FUNCTIONS ******** */


// initializing the form element on the change event of the sourah list
function initElements(){
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
		valid = false;
	}
	else
		$("#sourah").css("border","");

	if( parseInt($("#ayah-b").val()) < 1 || parseInt($("#ayah-b").val()) > totalAyah){
		$("#ayah-b").css("border","medium double red");
		valid = false;
	}
	else
		$("#ayah-b").css("border","");
	
	if( parseInt($("#ayah-e").val()) > totalAyah || parseInt($("#ayah-e").val()) < parseInt($("#ayah-b").val())){
		$("#ayah-e").css("border","medium double red");
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



/*
	Configuring the URL source:
*/
/** LOCAL INSTALLATION **
protocole = "http://";
host = "localhost/";
path = "";
receiter = "warsh_ibrahim_aldosary/";
/** SERVER CONFIGURATION **/
protocole = "http://";
host = "gem.everyayah.com/";
path = "data/warsh/";
receiter = "warsh_ibrahim_aldosary_128kbps/";

/* ****** */