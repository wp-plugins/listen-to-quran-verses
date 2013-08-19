<?php
global $language;
$b = false;

mqvLoadDictionary();

if( $_SERVER['REQUEST_METHOD'] == "POST" && !isset( $_POST['set-language'] ) )
    wp_die( "An error occured, please refresh the page" );

if( isset( $_POST['set-language'] ) ){
    setLanguage( $_POST['set-language'] );
    echo '<h3 id="mqv-success" style="display:none;background: none repeat scroll 0px 0px rgba(244, 243, 164, 0.29); padding: 10px; border-radius: 10px 10px 10px 10px; border: 1px solid darkgray;">Saved successfully!</h3>';
    $b = true;
}

?>


<h2> <?php echo mqvTranslate( "SETTING-PAGE-TITLE" ); ?> </h2>

<style>
    .mqv-btn-normal {
        background: none repeat scroll 0 0 white;
        border: 1px solid gray;
        border-radius: 5px 5px 5px 5px;
        box-shadow: 0 0 5px darkgray;
        margin: 5px;
        padding: 5px 10px;
    }
    .mqv-btn-normal:active {
        box-shadow: 0 0 5px darkgray inset;
        border: 1px solid orange;
    }
</style>

<p id="intro">
    Welcome to the page administration for:
    <a href="#" style="display: inline; font-weight: bolder; text-decoration: none; border-bottom: 1px dotted;">
        Listen To Quran Verses</a>
    wordpress plugin
</p>

<form method="post">
    <label for="mqv-language-combo">Please select a language: </label>
    <select id="mqv-language-combo" name="set-language">
        <option value="auto" selected>Auto Detect</option>
        <option value="ar">Arabic</option>
        <option value="en">English</option>
        <option value="fr_FR">French</option>
        <option value="de_DE">German</option>
    </select>
    <input id="mqv-language-save-btn" type="submit" class="mqv-btn-normal" value="save">
</form>
<p>
    Would you like add a tranlsation to your language?
    If so,
    <a href="mailto:aburomaissae@madev.org?Subject=Tranlsation%20Request" target="_top">
        email me.
    </a>
</p>
<br>
<br>
<br>

<div style="color: rgb(99, 93, 93); font-family: fantasy;">
    <p>
        If you like the plugin, please give it a rating, by doing so, you encourage me to imporve it more and more, as I see it usefull to others
    </p>
    <p>
        P.S: Please consider having a look on the android version: <a target="_blank" href="https://play.google.com/store/apps/details?id=org.wadakkir.listentoquranverses">https://play.google.com/store/apps/details?id=org.wadakkir.listentoquranverses</a>
    </p>
</div>
<script type="text/javascript">
    var currentLang = '<?php echo $language; ?>';
    jQuery("#mqv-language-combo").val(currentLang);
    
    <?php
        if( $b )  {
        ?>
            jQuery(document).ready(function(){
                jQuery("#mqv-success").slideDown("slow");
            });

        <?php
        }
    ?>
</script>