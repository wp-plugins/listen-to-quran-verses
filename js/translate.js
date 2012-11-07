// the script was originaly made in english as you can conclude (BTW: sorry for my bad english)
// so if the wordpress installation is in arabic a translation script is needed to translate the form, and here we are
// in this script we get the element which needs to be translated by the class '.toTranslate' and we change it text
// and to conclude we force the form direction attribute to rtl (just to be sure it will look fine :) )

$(document).ready(function (){
	$('.toTranslate').each(function(){
		var index = $(this).attr('transindex');
		if(index == null || typeof index == 'undefined' || index == "")
			return;
		$(this).text(dico[index]);
	});
	$("#start-reading").val(dico["GO"]);
	$(".mqv-container").css("direction","rtl");
});