// ------------- MENU LATERAL ------------- //

$(".body").prepend('<button type="button" class="btn btn-light hamburger hamburger--vortex" id="sidebarCollapse"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button><div id="menu-aside"><div class="menu-content"><iframe id="menuedx" src="https://openedx.stg.iepmoinhos.com/courses/course-v1:Moinhos+2022_ATS_IESFCS+2022_ATS_IESFCS_T1/course/outline_fragment" "allow-scripts allow-same-origin" width="100%" height="100%"> </iframe></div></div>');

// TOGGLE MENU
$('#sidebarCollapse').on('click', function () {
	$('#menu-aside').toggleClass('active');
	$('.content-wrapper .container').toggleClass('collapse');
	$('#sidebarCollapse').toggleClass('is-active');
	$('.menu-content').hasScrollBar();

	verificar_status_menu();

});

$('.xblock').on('click', '#close-sidebar', function() {
	$('#menu-aside').removeClass('active');
	$('.content-wrapper .container').removeClass('collapse');
	$('#sidebarCollapse').removeClass('is-active');
	$('.menu-content').hasScrollBar();

	verificar_status_menu();

});

$("#menu-aside .menu-content").prepend("<div><p class='conteudo-curso-menu'><button class='btn btn-light hamburger hamburger--vortex' id='expandir-menu'><span class='fa fa-angle-double-up' aria-hidden='true'></span></button> <span style='color: #417bb4 !important;'>ConteÃºdo do Curso</span> <button class='btn btn-light hamburger hamburger--vortex' id='close-sidebar'>&times;</button></p></div>");
$("#sidebarCollapse").html('<span class="fa fa-bars" aria-hidden="true"></span>');

// ACCORDION
$(".sub-menu-link").on("click", function(){
	// SE O ACCORDION ESTIVER ABERTO
	if($(this).next().css("display") == 'block'){
		console.log('1');
		$(this).removeClass('active');
		$('.sub-menu').slideUp("fast", function(){
			$('.menu-content').hasScrollBar();
		});
	}else{
		console.log('2');
		// SE O ACCORDION ESTIVER FECHADO
		$(".sub-menu-link").removeClass('active');
		$('.sub-menu').slideUp("fast");
		$(this).addClass('active');
		$(this).next().slideDown("fast", function(){
			$('.menu-content').hasScrollBar();
		});
	}
});

function loadmenu(){
	
	// IF HAS SCROLL
	(function($) {
		$.fn.hasScrollBar = function() {
			if((this.get(0).scrollHeight > this.height())){
				this.css('overflow-y','scroll');
			}else{
				this.css('overflow-y','hidden');
			}
		}
	})(jQuery);
	

	$(window).scroll(function() {
		
		if ($(this).scrollTop() > 1){  
			resizeMenu();
			$('#sidebarCollapse').addClass("scroll");
			$('#menu-aside').addClass("position-fixed");
		}
		else{
			$('#sidebarCollapse').removeClass("scroll");
			$('#menu-aside').removeClass("position-fixed");
		}
		
	});

	// DEFAULT ON LOAD
	var iframe = document.getElementById('menuedx');
	
	var style = document.createElement('style');
	style.textContent =
	'::-webkit-scrollbar {  width: 4.5px;  border-radius: 5px;height: 50% !important;}::-webkit-scrollbar-track {  border-radius: 5px; height: 50% !important; background: #e6e6e6;}::-webkit-scrollbar-thumb {background:#aaa;border-radius: 5px;}::-webkit-scrollbar-button {background-size: 100%;height: 10px;padding-top: 0px;border-radius: 100%;width: 0px;display:none;cursor:pointer;}' +
	'body {' +
	'  background-color: #fff;' +
	'  font-size: 15px;' +
	'} ' +
	'.subsection-text.prerequisite-button { display: none; }' +
	'.fa.complete-checkmark{border: unset !important;color: #417bb4;background-color: unset;position: absolute;right: 4%;font-size: 0.8em;padding: 2px;}' +
	'.expand-collapse-outline-all-extra-padding {display: none;}' +
	' #expand-collapse-outline-all-button, .localized-datetime{display: none; }' +
	'html, body{overflow-x: hidden !important;width:100% !important;}' +
	'.outline-item, .course-outline.block-tree{width:100% !important;}' +
	'.course-outline .block-tree .section .section-name .section-title{font-weight: 600 !important;}' +
	'.accordion-trigger{padding-left:10px;}' +
	'.course-outline .block-tree .section ol.outline-item .subsection{border-top: unset !important;}' +
	'.section-title{padding-left: 0px !important;font-size:1em !important;}' +
	'.fa.fa-chevron-right{color: #bebebe!important;float: left;margin-right:15px;}' +
	'.course-outline .block-tree .section .section-name{padding: 5px 0 5px 2px;padding-left: 10px;background: #fff !important;border-bottom: 1px solid #fff;}' +
	'.course-outline .block-tree .section{margin: 0px !important;width: 100%;padding-left: 0px !important;}' +
	'.course-outline .block-tree .section ol.outline-item .subsection{margin: 0px !important;margin-left: 0px !important;padding-left: 0px;}' +
	'button.accordion-trigger, button.prerequisite-button{padding: 5px 0 5px 2px;padding-left: 20px;border-bottom: 1px solid #fff;}' +
	'.course-outline .block-tree .section ol.outline-item .subsection .subsection-title{margin-left: 0px !important;padding-left: 0px !important;}' +
	'.course-outline .block-tree .section ol.outline-item .subsection .vertical{margin-left: 0px !important;}' +
	'.course-outline .block-tree .section ol.outline-item .subsection .vertical a.outline-item{padding: 5px 0 5px 0;margin-left: 0px !important;padding-left:45px !important;}' +
	'.content-wrapper{max-width:unset !important;margin-top: 0px !important;}' +
	'.course-outline .block-tree .section ol.outline-item{position:relative !important;margin-bottom: 0px !important;}' +
	'.course-outline .block-tree .section ol.outline-item .subsection .vertical a.outline-item{border-top: unset !important}' +
	'button.accordion-trigger, button.prerequisite-button{background: #fff  !important;}' +

	'.vertical-title, .subsection-title, .section-title{font-size: 11px !important;}'+
	'.vertical-details{width:80%;padding-left: 0%;}.accordion-trigger{outline:0}li.vertical.outline-item.focusable{border-bottom: 1px solid #fff;background-color:#fff}.scroll{height:10px;background:#fff;line-height:0;margin:30px 0 0 0}.scroll .handle{width:100px;height:100%;background:#9fb954;cursor:pointer}.scroll .handle .mousearea{position:absolute;top:0;left:0;width:100%;height:20px}.list .item,.list li,.list-bulleted .item,.list-divided .item,.list-grouped .item,.list-inline .item,.list-ordered .item,ol .item,ol li,ul .item,ul li{margin-bottom:0!important}.course-outline .block-tree .section{border-bottom: 1px solid #fff !important;}h4.subsection-title{width:77%;float:right}.margem20{margin-left:20%}.ativo{background-color:#f3f3f3;}.fa.complete-checkmark{order:1!important}h4.subsection-title{float:left!important;padding-left:13%!important}';
	
	iframe.contentDocument.head.appendChild(style);

	var chapter = $('.nav-item.nav-item-chapter').text().trim();
	var section = $('.nav-item.nav-item-section').text().trim();
	var sequence = $('.nav-item.nav-item-sequence').text().trim();
	iframeContents = $('#menuedx').contents();
	iframeContents.find('a').attr('target', '_parent');	
	// FECHAR ELEMENTOS
	iframeContents.find('.outline-item.accordion-panel').addClass('is-hidden');
	iframeContents.find('.accordion-trigger .fa-chevron-right').removeClass('fa-rotate-90');
	// ABRIR ELEMENTO ESPECÃƒÂFICO
	iframeContents.find("#expand-collapse-outline-all-button[aria-expanded='false']").trigger('click');
	iframeContents.find(".section-name.accordion-trigger[aria-expanded='true']").trigger('click');
	iframeContents.find(".subsection-text.accordion-trigger[aria-expanded='true']").trigger('click');
	iframeContents.find('h3.section-title:contains('+chapter+')').parent().trigger('click');
	iframeContents.find('h3.section-title:contains('+chapter+')').parent().next().find('h4.subsection-title:contains('+section+')').parent().trigger('click');
	iframeContents.find('h3.section-title:contains('+chapter+')').parent().next().find('div.vertical-title:contains('+sequence+')').parent().parent().addClass('ativo');
	
	iframeContents.find('#page-prompt').fadeOut();

	iframeContents.find('.fa.fa-chevron-right').addClass("fa-angle-right");

	iframeContents.find("#expand-collapse-outline-all-button").html("<i class='fa fa-expand' aria-hidden='true'></i>");

	$('.menu-content').hasScrollBar();
	$('#sidebarCollapse').fadeIn();
	$('#menu-aside').removeClass('active');
	$('.content-wrapper .container').removeClass('collapse');
	$('#sidebarCollapse').removeClass('is-active');
	$('#sidebarCollapse').removeClass("scroll");

	iframeContents.find('.fa-check').html('&#10004');
	iframeContents.find('.fa-check').removeClass('fa-check');

	function resizeMenu(){
		var menu_height = parseInt($(".window-wrap").css("height"));
		var body_height = parseInt($("body").css("height"));
		var height_to_menu = 100 - ((100*menu_height)/body_height);
		$('#menu-aside').css('height', height_to_menu+"%");
	}

	$(window).resize(function(){
		resizeMenu();
	});

	resizeMenu();

	if ($(this).scrollTop() > 1){  
		resizeMenu();
		$('#sidebarCollapse').addClass("scroll");
		$('#menu-aside').addClass("position-fixed");
	}else{
		$('#sidebarCollapse').removeClass("scroll");
		$('#menu-aside').removeClass("position-fixed");
	}

	$("#expandir-menu").on("click", function(){
		console.log('testeee');
		iframeContents.find("#expand-collapse-outline-all-button").trigger('click');
		$("#expandir-menu").html($("#expandir-menu").html() == '<span class="fa fa-angle-double-down" aria-hidden="true"></span>' ? '<span class="fa fa-angle-double-up" aria-hidden="true"></span>' : '<span class="fa fa-angle-double-down" aria-hidden="true"></span>');
	});

}

$('.content-wrapper .container').removeClass('collapse');

function verificar_sucesso(){

	i = 0;

	iframeContents = $('#menuedx').contents();

	iframeContents.find("a.outline-item").each(function() {
		if($(this).attr("target") === undefined || $(this).attr("target") === null){
			i++;
		}
	});

	if(i > 0){
		return false;
	}else{
		return true;
	}

}

function load(){

	j = 0;

	loadmenu();

	setInterval(function(){

		if(!verificar_sucesso()){
			loadmenu();
		}else{
			j++;
		}

		if(j==1){
			setTimeout(function(){ 
				if(status_menu_cach()){
					console.log("ABRIR MENU");
					$('#sidebarCollapse').trigger('click'); 
				}
			}, 600);
		}

	}, 10);

};

$(document).ready(function() {
	$(function(){
		$('#menuedx').load(function(){
			load();
			console.log('iframe loaded successfully');
		});
	});	
});

// VERIFICAR SE O MENU ESTÃ FECHADO EM CACH
function status_menu_cach(){
	console.log("STATUS DO MENU: "+sessionStorage.getItem('status_menu'));
	var statusMenu = sessionStorage.getItem('status_menu');
	if( statusMenu == "true" ){
       	return true;
    }else{
		return false;
	}
}

function verificar_status_menu(){
	if($('#menu-aside').hasClass('active')){
		sessionStorage.setItem('status_menu', true);
	}else{
		sessionStorage.setItem('status_menu', false);
	}
}