=== Listen to Quran Verses  ===
Contributors: ibralnet
Tags: quran, memorising, verses, list, play, player, random, widget
Requires at least: 3.0.1
Tested up to: 4.1
Stable tag: 2.2.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A Quran player developed for the purpose to listen and/or memorize the Quran with the functionality to repeat many times a specific interval of verses

== Description ==

Simple functionnality, but yet very usefull way to listen to Quran verse by verse, specially for people trying to revise/memorise some verses, this plugin tries to let you use the functionnality with an easy interface, with a support for both RTL and LTR directions and a bilingue form, including a widget which plays a random recitation every time it load. 

The plugin switches automatically the languages and direction based on your wordpress installation

* Supports Both RTL and LTR directions
* You can choose a prefered reciter from the list provided
* You can select an interval of verses to play
* Define the number of times each verse will be repeated
* You can also repeat the whole interval as many times as you want by setting this functionality to ON.  

A nice paging and a progress bar is there to help you know the current and already played verses from the interval you selected


* Activating the random recitation widget, will allow you to play a random recitation every time the page loaded
* Users view the recitation download progress, pause, stop, and play the recitation at will
* We are preparing the recitations continuesly, if you would like to add a recitation just contact us and we will show you how to add as many recitations as you want


Your comments or ideas are very welcome, don't hesitate to contact me for any question or suggestion.

<h3>Languages</h3>
The plugin currently support:

1. Aarbe
1. English
1. French
1. Deutsch (Provided by <a href="http://www.masjid-assalam.de/">Masjid Assalam</a>)

If you wish to add your languages just submit a request with the contact page and we will contact you with a form where you can put your language translations

1. <a href="http://listenquran.madev.org/contact/">Developer contact page</a>
1. <a href="http://listenquran.madev.org/demo/">Online Demo</a>

== Installation ==

<h3>Basic Steps</h3>

1. Upload `plugin-name.php` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Place `{QuranVerses}` anywhere in your page/post content.

<h3>IMPORTANT NOTES:</h3>

* This plugin will only work if your theme allows inserting code in the HEAD and FOOTER sections of your blog.
* make sure you add `{QuranVerses}` in your new page or new post. so it start showing instantly.
* The plugin needs to be connected to internet in order to load the media files (can't be done if you are working on a local machine without an active internet connection)


<h3>Useful links:</h3>
1. <a href="http://www.youtube.com/watch?v=bd-iGTudp4c" title="Install and use wordpress plugin (Listen to Quran Verses)">Video tutorial on intalling the plugin</a>
1. <a href="http://www.youtube.com/watch?v=6KdemRIoi84" title="How to Use Listen to Quran Plugin">Video tutorial on how to use the plugin</a>


== Screenshots ==

1. Enlgish interface showing the new interface
2. Enlgish interface showing the new autocomplete function & repeat the whole interface hint
3. German version of the widget to play a random ayah every time the page loaded
4. English version of the administration interface to change the plugin language

== Changelog ==

= 2.2.2 =

* Fix audio files location

= 2.2.1 =

* Minor fix, correction Sourah 'Qaf' number of verses

= 2.2 =

* changed the translation mechanism
* added an administration menu that enable the administrator select the language he wants to show.
* some minor changes and bug fixes

= 2.1.2 =

* Remove the autoplay from the random verses widget 

= 2.1.1 =

* bug fix for a random recitation issue

= 2.1 =

* fix jquery no conflict for some themes

= 2.0.2 = 

* Add german Support provided by <a href="http://www.masjid-assalam.de/" >Masjid Assalam</a>

= 2.0.1 = 

* small language feature fix: left in the previous deploy

= 2.0 =

* Add more reciters
* Add "show all" to sourah list
* Fix some themes problem with the form

= 1.3.6 =

* Fix URLs

= 1.3.5 =

* Hot fix repeat verses bug

= 1.3.4 =

* Add french language support

= 1.3.3 =

* Add change recitation for widget
* Solve slow websites problem
* Review script dependencies 
* Add some missing translations

= 1.3.2 =

* Add missing arabic translation
* Change error/warning messages position

= 1.3.1 =

* Bug fix for dependency and jQuery noConflict 

= 1.3 =

* Separate simple from advanced setting into two groups
* Adding a pause to wait for the listener to repeat after the reciter
* Removing "Random Ayah" Widget
* Add "Random Recitation" Widget 

= 1.2.1 =

* Fixing the bug of conflict with the jquery-ui scripts

= 1.2 =

* Add some translations and error messages
* Add a widget to play random verses
* Styling error/warning messages shown to the user
* Rename player holder div id

= 1.1.2 =

* Add some missing translations
* Hot fix for tracks link

= 1.1.1 =

* make default "go"
* change start/end to interval 
* add error message to the form
* disable a negative value
* add an explicit infinite loop note about 0 for repeat all
* switch from autocomplete to search behavior
* add sourah number in the list

= 1.1 =

* add limit function to repeat all
* bugfixing playlist item

= 1.0 =

* first release
