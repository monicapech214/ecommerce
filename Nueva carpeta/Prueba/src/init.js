var NEW_TEXT_EMPTY = 'PRESIONE ACEPTAR PARA INGRESAR EL TEXTO A LA PLANTILLA';
var CONFIRM_DELETE = 'SEGURO QUE DESEAS ELIMINAR ¿?';
var CONFIRM_DELETE_SHOW = false;
var VALIDATE_IMAGE = 'SELECCIONA UNA IMAGEN¡!';
var UPLOAD_SUPPORT = 'A CONTINUACION RECARGUE SU NAVEGADOR PREDETERMINADO...';
var DOWNLOAD_SUPPORT = 'SE NECESITA DE LA ACTUALIZACION DEL NAVEGADOR PREDETERMINADO EN USO....';
var NOT_FOUND = 'INTERFAZ GRAFICA NO ENCONTRADA ¡!';

$(document).ready(function(){
	var options = {
		container: '.ctf_container',
		watermark: 'img/img.png',
		json: 'data.json',
		fonts: [
			'Sahitya','JI-Import','Dancing Script','Roboto','Plain Germanica','JI-Bedaub','JI-Embows','Gabrielle','Sports World','JI-Drapey','Alex Brush','Mountains of Christmas','JI-Hasted','Incised Black'
		],
		colors: [
			'black','white','red','blue', 'gray', 'green', 'orange'
		]
	};
	setTimeout(function(){
		ctf_init(options);
	},100);	
});
function ctf_init(options){
var ctf_container = $(options.container);
if(ctf_container.length == 0)return;

var ctf_body = $('body');
var ctf_canvas_container = ctf_container.find('.ctf_canvas_container');
var ctf_canvas = ctf_container.find('.ctf_canvas');
var ctf_canvas1 = ctf_container.find('.ctf_canvas1');
var ctf_canvas1_bg = ctf_canvas1.find('.ctf_bg');
var ctf_canvas2 = ctf_container.find('.ctf_canvas2');
var ctf_canvas2_bg = ctf_canvas2.find('.ctf_bg');
var ctf_options = ctf_container.find('.ctf_options');
var ctf_a4_btn = ctf_container.find('.ctf_a4_btn');
var ctf_letter_btn = ctf_container.find('.ctf_letter_btn');
var ctf_portrait_btn = ctf_container.find('.ctf_portrait_btn');
var ctf_landscape_btn = ctf_container.find('.ctf_landscape_btn');
var ctf_print1_btn = ctf_container.find('.ctf_print1_btn');
var ctf_print2_btn = ctf_container.find('.ctf_print2_btn');
var ctf_new_text = ctf_container.find('.ctf_new_text');
var ctf_new_text_btn = ctf_container.find('.ctf_new_text_btn');
var ctf_print_btn = ctf_container.find('.ctf_print_btn');
var ctf_download_btn = ctf_container.find('.ctf_download_btn');
var ctf_prev_btn = ctf_container.find('.ctf_prev_btn');
var ctf_next_btn = ctf_container.find('.ctf_next_btn');
var ctf_align_left_btn = ctf_container.find('.ctf_align_left_btn');
var ctf_align_center_btn = ctf_container.find('.ctf_align_center_btn');
var ctf_align_right_btn = ctf_container.find('.ctf_align_right_btn');
var ctf_position_center_btn = ctf_container.find('.ctf_position_center_btn');

var ctf_color = ctf_container.find('.ctf_color span');
var ctf_font_select = ctf_container.find('.ctf_font select');
var ctf_font_size_select = ctf_container.find('.ctf_font_size select');

var ctf_image_new = ctf_container.find('.ctf_image_new .file');
var ctf_show_line = ctf_container.find('.ctf_show_line');
var ctf_show_line_rb1 = ctf_container.find('.ctf_show_line_rb1');
var ctf_show_line_rb2 = ctf_container.find('.ctf_show_line_rb2');
var ctf_make_page = ctf_container.find('.ctf_make_page');
var ctf_print_canvas = $('.ctf_print_canvas');
var ctf_download_form = $('.ctf_download_form form');
var ctf_bold_btn = $('.ctf_bold_btn');
var ctf_loading = $('.ctf_loading');
var ctf_download_canvas = $('.ctf_download_canvas');

var ctf_w;
var ctf_h;
var ctf_orientation = 'p';
var ctf_size = 'l';
var ctf_fonts = options.fonts || [];
var ctf_colors = options.colors || [];
var ctf_json = options.json || false;
var ctf_json_data;
var ctf_is_portrait;
var ctf_is_landscape;
var ctf_is_a4;
var ctf_is_letter;
var ctf_start_image = -1;
var ctf_last_image;
var ctf_root_image;
var ctf_max = -1;

var cft_a4_w = 210;
var cft_a4_h = 297;
var cft_l_w = 216;
var cft_l_h = 279;
var ctf_text = false;
var ctf_padding = 11;
var ctf_upload_support = false;
var ctf_image_count = 0;
var first = true;
var ctf_load_bg_first_count = 0;
var ctf_load_bg_first_total = 0;
var ctf_portrait_half = false;
var ctf_landscape_half = false;
var ctf_landscape_quarter = false;
var ctf_layout;
var ctf_text_line;
var ctf_canvas_support;
var ctf_text_resize_start = false;
var ctf_ctrl = false;
var ctf_step = 1;

/* EVENTS */
$(document).on('contextmenu',function(){
	return false;
});
ctf_a4_btn.click(function(ev){
	ev.stopPropagation();
	$(this).addClass('active').siblings().removeClass('active');
	ctf_canvas_container.removeClass('letter');
	ctf_print_canvas.removeClass('letter');
	ctf_size = 'a4';
	ctf_change_images();
	setTimeout(function(){
		ctf_resize_all();
	},0);
});
ctf_letter_btn.click(function(ev){
	ev.stopPropagation();
	$(this).addClass('active').siblings().removeClass('active');
	ctf_canvas_container.addClass('letter');
	ctf_print_canvas.addClass('letter');
	ctf_size = 'l';
	ctf_change_images();
	setTimeout(function(){
		ctf_resize_all();
	},0);
});
ctf_portrait_btn.click(function(ev){
	ev.stopPropagation();	
	$(this).addClass('active').siblings().removeClass('active');
	ctf_canvas_container.removeClass('landscape');
	ctf_print_canvas.removeClass('landscape');
	ctf_orientation = 'p';
	ctf_canvas2.find('.active').removeClass('active');
	ctf_resize_all();
});
ctf_landscape_btn.click(function(ev){
	ev.stopPropagation();
	$(this).addClass('active').siblings().removeClass('active');
	ctf_canvas_container.addClass('landscape');
	ctf_print_canvas.addClass('landscape');
	ctf_orientation = 'l';
	ctf_canvas1.find('.active').removeClass('active');
});
ctf_print1_btn.click(function(ev){
	ev.stopPropagation();
	$(this).addClass('active').siblings().removeClass('active');
	ctf_body.removeClass('ctf_print2');
	ctf_canvas.find('.active').removeClass('active');
});
ctf_print2_btn.click(function(ev){
	ev.stopPropagation();
	$(this).addClass('active').siblings().removeClass('active');
	ctf_body.addClass('ctf_print2');
});
ctf_print_btn.click(function(ev){
	ev.stopPropagation();
	ctf_print_canvas_create();	
	setTimeout(function(){
		window.print();
	},100);
});
ctf_download_btn.click(function(ev){
	ev.stopPropagation();
	var el = ctf_canvas1;
	if(ctf_orientation == 'l'){
		el = ctf_canvas2;
	};	
	if(!ctf_canvas_support){
		ctf_msg(DOWNLOAD_SUPPORT);
	}else{
		el.find('.active').removeClass('active');
		var clone = el.clone();		
		clone.find('.ctf_watermark').attr('src',clone.find('.ctf_watermark').attr('src').replace('l','l2').replace('p','p2'));
		ctf_download_canvas.html(clone);
		
		html2canvas(clone.get(0),{
			onrendered: function(canvas){			
				var canvas2 = document.createElement('canvas');
				canvas2.setAttribute('width',ctf_print_canvas.width());
				canvas2.setAttribute('height',ctf_print_canvas.height());
				var ctx = canvas2.getContext('2d');
				ctx.drawImage(canvas,0,0,canvas.width, canvas.height*1.1,0,0,ctf_print_canvas.width(),ctf_print_canvas.height()*1.1);
				
				var data_url = canvas2.toDataURL('image/png');
				var half = parseInt((data_url.length-1)/2);
				ctf_download_form.find('input[name="download"]').val(data_url.substring(0,half));
				ctf_download_form.find('input[name="download2"]').val(data_url.substring(half,data_url.length-1));
				setTimeout(function(){
					ctf_download_form.submit();
				});
			},
			width: el.width(),
			height: el.height()*1.1
		});
	}
});
ctf_prev_btn.click(function(ev){
	ev.stopPropagation();
	if(ctf_start_image>1){
		ctf_start_image--;
		ctf_update_buttons();
		ctf_change_images();
	};
});
ctf_next_btn.click(function(ev){
	ev.stopPropagation();
	if(ctf_start_image<ctf_last_image){
		ctf_start_image++;
		ctf_update_buttons();
		ctf_change_images();
	};
});
ctf_font_select.change(function(ev){
	ev.stopPropagation();
	var i = $(this).find('option:selected').index();
	$(this).css('font-family',ctf_fonts[i]);
	if(ctf_text){
		ctf_text.find('textarea').css('font-family',ctf_fonts[i]);
	}else{
		ctf_canvas_container.find('.ctf_text textarea').css('font-family',ctf_fonts[i]);
	};
	ctf_resize_all();
});
ctf_font_size_select.change(function(ev){
	ev.stopPropagation();
	var i = $(this).find('option:selected').val();
	if(ctf_text){
		ctf_text.attr('data-size',i).find('textarea').css('font-size',i+'px');
		ctf_resize_all();
	};	
});
ctf_canvas_container.delegate('.ctf_text, .ctf_image','click',function(ev){
	ev.stopPropagation();
	if(!ctf_ctrl){
		$(this).parent().find('.active').removeClass('active');
	};
	$(this).addClass('active');
	ctf_text = $(this).parent().find('.active');	
	if(ctf_text.hasClass('ctf_text')){
		var f = ctf_text.attr('data-size');
		ctf_font_size_select.val(ctf_text.attr('data-size'));
		ctf_font_select.val(ctf_text.find('textarea').css('font-family')).trigger('change');
		var ta = ctf_text.find('textarea');
		if(ta.hasClass('left')){
			ctf_align_left_btn.trigger('click');
		}else if(ta.hasClass('right')){
			ctf_align_right_btn.trigger('click');
		}else{
			ctf_align_center_btn.trigger('click');
		};
		if(ctf_text.hasClass('bold')){
			ctf_bold_btn.addClass('active');		
		}else{
			ctf_bold_btn.removeClass('active');	
		};
		ctf_color.find('i[data-color="'+ctf_text.attr('data-color')+'"]').trigger('click');
	};
});
ctf_canvas_container.delegate('.ctf_delete','click',function(ev){
	ev.stopPropagation();
	var del = true;
	if(CONFIRM_DELETE_SHOW){
		var c = confirm(CONFIRM_DELETE);
		if(!c){
			del = false;
		};
	};
	if(del){
		$(this).parent().remove();
	};
});
ctf_canvas_container.delegate('.ctf_center','click',function(ev){
	ev.stopPropagation();
	var center = $(this).parent().attr('data-center') || 50;
	$(this).parent().css({
		'left':center+'%',
		'margin-left':-$(this).parent().outerWidth()/2+'px',		
	}).attr('data-x',center);	
});
$(window).resize(function(){	
	if(!ctf_text_resize_start){
		ctf_resize();
		ctf_resize_all();
	};
});
ctf_canvas_container.delegate('img','dragstart', function(ev) {
	ev.preventDefault();
});
ctf_canvas_container.delegate('.ctf_text textarea','keyup input',function(ev){
	ev.stopPropagation();	
	var el = this;	
	var offset_w = el.offsetWidth - el.clientWidth;
	var offset_h = el.offsetHeight - el.clientHeight;
	setTimeout(function(){
		$(el).css('height','auto').css('height',el.scrollHeight + offset_h+'px').attr('rows',$(el).val().split('\n').length);
	},0);
});
ctf_canvas_container.click(function(ev){
	ev.stopPropagation();
	ctf_canvas_container.find('.ctf_text, .ctf_image').removeClass('active');
	ctf_bold_btn.removeClass('active');
	ctf_color.find('.active').removeClass('active');
	ctf_text = false;
	ctf_align_left_btn.parent().find('.active').removeClass('active');
});
ctf_new_text_btn.click(function(ev){
	ev.stopPropagation();
	if($.trim(ctf_new_text.val()) == ''){
		ctf_msg(NEW_TEXT_EMPTY);
	}else{
		ctx_add_new_text(ctf_new_text.val());
	};
});
ctf_align_left_btn.click(function(ev){
	ev.stopPropagation();
	if(ctf_text){
		$(this).addClass('active').siblings().removeClass('active');
		ctf_text.find('textarea').removeClass('right').addClass('left');
	};
});
ctf_align_right_btn.click(function(ev){
	ev.stopPropagation();
	if(ctf_text){
		$(this).addClass('active').siblings().removeClass('active');
		ctf_text.find('textarea').removeClass('left').addClass('right');
		
	};
});
ctf_align_center_btn.click(function(ev){
	ev.stopPropagation();
	if(ctf_text){
		$(this).addClass('active').siblings().removeClass('active');
		ctf_text.find('textarea').removeClass('left').removeClass('right');
	};
});
ctf_image_new.change(function(ev){
	ev.stopPropagation();
	var file = $(this).val();
	var ext = file.split('.');
	ext = ext[ext.length - 1].toLowerCase();
	if(ext == 'jpeg' || ext == 'jpg' || ext == 'gif' || ext == 'png'){
		if(ctf_upload_support){
			ctf_upload_image(ev.target.files[0]);
		}else{
			ctf_msg(UPLOAD_SUPPORT);
			ctf_image_new.val('');
			return false;
		};
	}else{
		ctf_msg(VALIDATE_IMAGE);
		ctf_image_new.val('');
		return false;
	};
}).val('');
ctf_canvas_container.delegate('.ctf_text textarea','keyup',function(ev){
	ev.stopPropagation();
	var text = $(this).val();
	var num = $(this).parent().parent().attr('data-num');
	ctf_canvas.find('.ctf_text[data-num="'+num+'"] textarea').val(text);
	if(ev.which == 17){
		ctf_ctrl = false;
	};
});
ctf_show_line_rb1.change(function(ev){
	ev.stopPropagation();
	ctf_body.addClass('ctf_show_lines');
});
ctf_show_line_rb2.change(function(ev){
	ev.stopPropagation();
	ctf_body.removeClass('ctf_show_lines');
});
ctf_bold_btn.click(function(ev){
	ev.stopPropagation();
	if(ctf_text){
		if(ctf_text.hasClass('bold')){
			ctf_text.removeClass('bold');
			$(this).removeClass('active');
		}else{
			ctf_text.addClass('bold');
			$(this).addClass('active');
		};
		ctf_resize_all();
	};
});
ctf_color.delegate('i','click',function(ev){
	ev.stopPropagation();
	$(this).addClass('active').siblings().removeClass('active');
	if(ctf_text){
		var color = $(this).attr('data-color');
		ctf_text.attr('data-color',color).find('textarea').css('color',color);
	};
});
$(document).keyup(function(ev){
	ev.stopPropagation();
	if(ev.which == 17){
		ctf_ctrl = false;
	};
});
$(document).keydown(function(ev){
	ev.stopPropagation();
	var move = false;
	if(ev.which == 17){
		ctf_ctrl = true;
	}else if(ctf_ctrl && ev.which == 37){
		/* left */
		ctf_canvas.find('.active').each(function(){
			$(this).css('left',$(this).position().left - ctf_step);
		}).find('textarea').trigger('blur');
		move = true;
	}else if(ctf_ctrl && ev.which == 38){
		/* up */
		ctf_canvas.find('.active').each(function(){
			$(this).css('top',$(this).position().top - ctf_step);
		}).find('textarea').trigger('blur');
		move = true;
	}else if(ctf_ctrl && ev.which == 39){
		/* right */
		ctf_canvas.find('.active').each(function(){
			$(this).css('left',$(this).position().left + ctf_step);
		}).find('textarea').trigger('blur');
		move = true;
	}else if(ctf_ctrl && ev.which == 40){
		/* down */
		ctf_canvas.find('.active').each(function(){
			$(this).css('top',$(this).position().top + ctf_step);
		}).find('textarea').trigger('blur');
		move = true;
	};	
	if(move){
		ctf_canvas.find('.active').each(function(){
			$(this).attr('data-x',$(this).position().left/$(this).parent().width()*100);
			$(this).attr('data-y',$(this).position().top/$(this).parent().height()*100);
		});
	};
});

/* FUNCTIONS */
function ctf_resize_all(){
	if(!ctf_text_resize_start){
		ctf_resize_item(ctf_canvas1);
		ctf_resize_item(ctf_canvas2);
	};
};
function ctf_images_preload(){
	setTimeout(function(){
		ctf_loading.addClass('load');
	},500);
	setTimeout(function(){
		for(var i=1;i<=ctf_last_image;i++){
			var img = new Image();
			var img2 = new Image();
			var img3 = new Image();
			var img4 = new Image();
			var url = ctf_root_image + ctf_cert+'/'+ctf_cert+i;		
			if(ctf_is_portrait){
				img.src = url+'_a4p.jpg';
				img3.src = url+'_lp.jpg';
			}
			if(ctf_is_landscape){
				img2.src = url+'_a4l.jpg';
				img4.src = url+'_ll.jpg';
			};
		};
		
	},2000);	
	
};
function ctx_add_new_text(text){	
	if(ctf_orientation == 'p'){
		text = ctf_create_text('new',ctf_canvas1,ctf_max,text,50,40);		
		ctf_canvas.append(text);
		ctf_draggable_resizable(ctf_canvas);
		ctf_resize_all();
		ctf_canvas1.find('.ctf_text_new').eq(0).trigger('click').find('textarea').focus();
	}else{
		text = ctf_create_text('new',ctf_canvas2,ctf_max,text,50,40);
		ctf_canvas.append(text);
		ctf_canvas1.find('.ctf_text_new').attr('data-x',50);
		ctf_draggable_resizable(ctf_canvas);
		ctf_resize_all();		
		ctf_canvas2.find('.ctf_text_new').eq(0).trigger('click').find('textarea').focus();
	};
	ctf_canvas.find('.ctf_text_new').removeClass('ctf_text_new');
	ctf_new_text.val('');
};
function ctf_create_text_all(el,type){
	if(typeof ctf_json_data.texts == 'undefined')return;
	var html = '';
	for(var i=0; i < ctf_json_data.texts.length; i++){
		if(typeof ctf_json_data.texts[i][type] != 'undefined'){
			html += ctf_create_text('default',el,i,ctf_json_data.texts[i].text,ctf_json_data.texts[i][type].x,ctf_json_data.texts[i][type].y,ctf_json_data.texts[i][type].size,ctf_json_data.texts[i][type].align,ctf_json_data.texts[i][type].w,ctf_json_data.texts[i][type].line,ctf_json_data.texts[i][type].color,ctf_json_data.texts[i][type].weight,ctf_json_data.texts[i][type].center);
		}		
	};
	el.append(html);	
	ctf_draggable_resizable(el);
	ctf_resize_item(el);
	el.find('.ctf_text_new').removeClass('ctf_text_new');
};
function ctf_draggable_resizable(el,ratio){
	el.find('.ctf_text_new, .ctf_image_new').draggable({
		handle: '.ctf_move',
		stop: function(ev,ui){
			var l = ui.position.left;
			var t = ui.position.top;
			$(ui.helper).attr('data-x',l/$(ui.helper).parent().width()*100);
			$(ui.helper).attr('data-y',t/$(ui.helper).parent().height()*100);
		}
	}).find('textarea, img').resizable({
		aspectRatio: ratio,
		start: function(ev,ui){	
			ctf_text_resize_start = true;
			$(ui.helper).parent().css('width','auto');
		},
		stop: function(ev,ui){
			ctf_text_resize_start = false;
			var w = $(ui.helper).parent().parent().width();			
			var w_text = $(ui.helper).parent().outerWidth();
			var ml = parseInt($(ui.helper).parent().css('margin-left'));
			var x = ($(ui.helper).parent().position().left+ml+w_text/2)/w*100;
			
			w = $(ui.helper).parent().width()/w*100;
			$(ui.helper).parent().attr('data-w',w).attr('data-x',x);
		}
	});	
};
function ctf_resize_item(el){
	if(typeof ctf_json_data == 'undefined'){		
		return;
	};
	if(typeof ctf_json_data.texts == 'undefined')return;
	var el_w = el.width();
	var el_h = el.height();
	var page_w = cft_a4_w;
	var page_h = cft_a4_h;
	var half = 1;
	if(ctf_size == 'l'){
		page_w = cft_l_w;
		page_h = cft_l_h;
	};
	if(el.hasClass('ctf_canvas2')){
		var page_w_tmp = page_w;
		page_w = page_h;
		page_h = page_w_tmp;
	};
	el.find('.ctf_text, .ctf_image').each(function(key){
		var el2 = $(this);
		var x = el2.attr('data-x');
		var y = el2.attr('data-y');
		var size = el2.attr('data-size');
		var align = el2.attr('data-align');				
		var w = el2.attr('data-w');	
		x = parseFloat(x);	
		y = parseFloat(y);
		w = parseFloat(w);
		if(half > 1){
			size = (parseFloat(size)/half)/page_h*el_h;
		}else{
			size = (parseFloat(size)/half)/page_h*el_h;
		};		
		el2.find('textarea').css({
			'font-size': size+'px',
			'line-height': size*1.2+'px'
		}).addClass(align);
		el2.find('textarea, img').css({
			'height': 'auto',
			'width': 'auto'
		});
		el2.find('.ui-wrapper').css('width','auto').css('height','auto');
		if(w){
			el2.css('width',w+'%');
			el2.find('textarea, img').css('width','100%');
		};
		setTimeout(function(){
			el2.css({
				'left':x+'%',
				'top':y+'%',
				'margin-left':-el2.outerWidth()/2+'px'
			});			
		},0);
	});
};
function ctf_print_canvas_create(){
	var clone;
	if(ctf_orientation == 'p'){
		clone = ctf_canvas1.clone();
	}else if(ctf_orientation == 'l'){
		clone = ctf_canvas2.clone();
	};
	ctf_print_canvas.html(clone);
	ctf_resize_item(ctf_print_canvas.find('.ctf_canvas'));
	ctf_print_canvas.find('.active').removeClass('active');
};
function ctf_is_canvas_support(){
	var canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    var uri = (typeof canvas != 'undefined' && typeof canvas.toDataURL != 'undefined' ) ? canvas.toDataURL('image/png') : '';
    if(uri.toLowerCase().match('image/png') !== null){
		return true;
	};
	return false;
};
function ctf_resize(){		
	ctf_w = ctf_canvas_container.width();	
	ctf_h = ctf_canvas_container.height();	
	var img1_w = ctf_canvas1.find('.ctf_bg').width();
	var img1_h = ctf_canvas1.find('.ctf_bg').height();	
	var img2_w = ctf_canvas2.find('.ctf_bg').width();
	var img2_h = ctf_canvas2.find('.ctf_bg').height();	
	var percent = 0.85;
	if(ctf_w > ctf_h){
		ctf_canvas1.height(ctf_h*percent);
		ctf_canvas1.width(ctf_h*img1_w/img1_h*percent);
		ctf_canvas2.width(ctf_h*percent);
		ctf_canvas2.height(ctf_h*img2_h/img2_w*percent);
	}else{
		ctf_canvas1.height(ctf_h*percent);
		ctf_canvas1.width(ctf_h*img1_w/img1_h*percent);
		ctf_canvas2.width(ctf_w*percent);
		ctf_canvas2.height(ctf_w*img2_h/img2_w*percent);
	}
	ctf_canvas1.css('margin-top',(ctf_h-ctf_canvas1.height())/2+'px');
	ctf_canvas2.css('margin-top',(ctf_h-ctf_canvas2.height())/2+'px');
	
};
function ctf_update_data(){
	ctf_is_portrait = ctf_json_data.portrait || false;
	ctf_is_landscape = ctf_json_data.landscape || false;
	ctf_is_a4 = ctf_json_data.a4 || false;
	ctf_is_letter = ctf_json_data.letter || false;	
	ctf_last_image = ctf_json_data.bg_last || 1;
	ctf_portrait_half = ctf_json_data.portrait_half || false;
	ctf_landscape_quarter = ctf_json_data.landscape_quarter || false;
	ctf_landscape_half = ctf_json_data.landscape_half || false;
	ctf_layout = ctf_json_data.layout || 'portrait';
	
	if(ctf_start_image == -1){
		ctf_start_image = ctf_json_data.bg_start || 1;
	};
	
	if(!ctf_is_portrait){
		ctf_portrait_btn.hide();
	};
	if(!ctf_is_landscape){
		ctf_landscape_btn.hide();
	}
	if(!ctf_is_a4){
		ctf_a4_btn.hide();
	};
	if(!ctf_is_letter){
		ctf_letter_btn.hide();
	};
	if(!ctf_is_portrait && ctf_is_landscape){
		ctf_landscape_btn.addClass('active').siblings().removeClass('active');
		ctf_orientation = 'l';
	};
	if(!ctf_is_a4 && ctf_is_letter){
		ctf_letter_btn.addClass('active').siblings().removeClass('active');
		ctf_size = 'l'
	};	
	if(ctf_is_portrait){
		ctf_load_bg_first_total++;
		ctf_load_bg(true,ctf_cert+'/'+ctf_cert+ctf_start_image+'_'+ctf_size+'p.jpg',true);
	};
	if(ctf_is_landscape){
		ctf_load_bg_first_total++;
		ctf_load_bg(false,ctf_cert+'/'+ctf_cert+ctf_start_image+'_'+ctf_size+'l.jpg',true);
	};
	
	if(ctf_portrait_half){
		ctf_body.addClass('ctf_portrait_half');
	};
	if(ctf_landscape_half || ctf_landscape_quarter){
		ctf_body.addClass('ctf_landscape_half');
	};
	if(ctf_portrait_half || ctf_landscape_half || ctf_landscape_quarter){
		ctf_make_page.show();
	};
	if(ctf_landscape_quarter){
		ctf_print1_btn.html('make 2');
		ctf_print2_btn.html('make 4');
	};	
	if(ctf_layout == 'portrait' && ctf_is_portrait){
		ctf_portrait_btn.trigger('click');
	}else if(ctf_layout == 'landscape' && ctf_is_landscape){
		ctf_landscape_btn.trigger('click');
	};
	
	ctf_update_buttons();
};
function ctf_create_text(type,el,i,text,x,y,size,align,w,line_,color_,weight_,center_){
	if(i >= ctf_max)ctf_max = i+1;
	if(typeof align == 'undefined')align = 'center';
	var row = text.split('\n');
	var cols = row[0].length;
	var font = ctf_fonts[ctf_font_select.find('option:selected').index()];
	var line = (line_)?'ctf_line':'';
	var color = (color_)?color_:'black';
	var weight = (weight_)?weight_:'';
	var center = (center_)?center_:'50';
	var html = '<span data-center="'+center+'" data-color="'+color+'" data-num="'+i+'" class="ctf_text ctf_text_new '+line+' '+weight+'" data-x="'+x+'" data-y="'+y+'" data-size="'+size+'" data-align="'+align+'" data-w="'+w+'"><textarea cols="'+cols+'" wrap="off" rows="'+row.length+'" style="font-family: '+font+';color: '+color+'" >'+text+'</textarea><i class="ctf_move"></i><i class="ctf_delete"></i><i class="ctf_center"></i></span>';
	if(type == 'default' && ctf_landscape_quarter){
		x += 25;
		center += 25;
		html += '<span data-center="'+center+'" data-color="'+color+'"  class="ctf_text ctf_text_new '+line+' '+weight+'" data-x="'+x+'" data-y="'+y+'" data-size="'+size+'" data-align="'+align+'" data-w="'+w+'"><textarea cols="'+cols+'" wrap="off" rows="'+row.length+'" style="font-family: '+font+';color: '+color+'">'+text+'</textarea><i class="ctf_move"></i><i class="ctf_center"></i><i class="ctf_delete"></i></span>';
		x += 25;
		center += 25;
		html += '<span data-center="'+center+'" data-color="'+color+'"  class="ctf_text ctf_text_new '+line+' '+weight+'" data-x="'+x+'" data-y="'+y+'" data-size="'+size+'" data-align="'+align+'" data-w="'+w+'"><textarea cols="'+cols+'" wrap="off" rows="'+row.length+'" style="font-family: '+font+';color: '+color+'">'+text+'</textarea><i class="ctf_move"></i><i class="ctf_center"></i><i class="ctf_delete"></i></span>';
		x += 25;
		center += 25;
		html += '<span data-center="'+center+'" data-color="'+color+'"  class="ctf_text ctf_text_new '+line+' '+weight+'" data-x="'+x+'" data-y="'+y+'" data-size="'+size+'" data-align="'+align+'" data-w="'+w+'"><textarea cols="'+cols+'" wrap="off" rows="'+row.length+'" style="font-family: '+font+';color: '+color+'">'+text+'</textarea><i class="ctf_move"></i><i class="ctf_center"></i><i class="ctf_delete"></i></span>';
	}
	return html;
};
function ctf_create_image(i,image,x,y,w){
	return '<span data-x="'+x+'" data-y="'+y+'" data-w="'+w+'" data-num="'+i+'" class="ctf_image ctf_image_new"><img src="'+image+'" alt="img" /><i class="ctf_move"></i><i class="ctf_delete"></i><i class="ctf_center"></i></span>';
};
function ctf_load_bg(is_portrait, src, first){
	src = ctf_root_image + src;
	var img = new Image();
	img.onload = function(){
		var img_w = this.width;
		var img_h = this.height;
		if(is_portrait){
			ctf_canvas1_bg.get(0).src = this.src;
		}else{
			ctf_canvas2_bg.get(0).src = this.src;
		};
		ctf_resize();
		if(first){
			ctf_load_bg_first_count++;
			ctf_load_bg_first();
		};
	};
	if(first){
		img.onerror = function(){
			if(first){
				ctf_load_bg_first_count++;
				ctf_load_bg_first();
			};
		};
	};
	img.src = src;
};
function ctf_load_bg_first(){
	if(ctf_load_bg_first_total == ctf_load_bg_first_count){
		ctf_create_text_all(ctf_canvas1,'portrait');
		ctf_create_text_all(ctf_canvas2,'landscape');
		if(ctf_container.find('.ctf_line').length > 0){
			ctf_show_line_rb1.prop('checked',true).trigger('change');
			ctf_show_line.show();
		};
		ctf_print2_btn.trigger('click');
		ctf_images_preload();
	};
};
function ctf_upload_image(file){
	var fr = new FileReader();
    fr.onload = function(ev){
        if(ev.target.readyState == FileReader.DONE){
			ctf_image_count++;
			var img = new Image();
			img.onload = function(){
				var image = ctf_create_image(ctf_image_count,ev.target.result,50,30,40);
				ctf_canvas.append(image);
				ctf_draggable_resizable(ctf_canvas,true);
				ctf_canvas.find('.ctf_image_new').each(function(){
					var ml = -$(this).outerWidth()/2;
					$(this).css({
						'left': '50%',
						'top': '30%',
						'margin-left':ml+'px'
					});
				});
				if(ctf_orientation == 'p'){
					ctf_canvas1.find('.ctf_image_new').trigger('click');
				}else{
					ctf_canvas2.find('.ctf_image_new').trigger('click');
				};
				ctf_canvas.find('.ctf_image_new').removeClass('ctf_image_new');
			};
			img.src = ev.target.result;			
        };
    };
    fr.readAsDataURL(file);
};
function ctf_update_buttons(){
	if(ctf_start_image == ctf_last_image){
		ctf_next_btn.removeClass('active');
	}else{
		ctf_next_btn.addClass('active');
	};
	if(ctf_start_image == 1){
		ctf_prev_btn.removeClass('active');
	}else{
		ctf_prev_btn.addClass('active');
	};
};
function ctf_change_images(){
	if(ctf_is_portrait){
		ctf_load_bg(true,ctf_cert+'/'+ctf_cert+ctf_start_image+'_'+ctf_size+'p.jpg');
	};
	if(ctf_is_landscape){
		ctf_load_bg(false,ctf_cert+'/'+ctf_cert+ctf_start_image+'_'+ctf_size+'l.jpg');
	};
};
function ctf_read_json(){
$.getJSON(
	ctf_json+'?v=8',
	{},
	function(json){
		if(ctf_cert){
			var ctf_cert2 = ctf_cert.replace(/\d+/g, '');
			if(ctf_cert2.length != ctf_cert.length){
				ctf_start_image = parseInt(ctf_cert.replace(ctf_cert2,''));
				ctf_cert = ctf_cert2;
			}
		};	
		var found = false;
		if(ctf_cert){
			for(var num in json.bg){
				if($.trim(json.bg[num].category) == $.trim(ctf_cert)){
					if(ctf_start_image<=json.bg[num].bg_last){
						found = true;
					};
					ctf_root_image = json.bg_root + '/';
					ctf_root_image = ctf_root_image.replace('//','/');
					ctf_json_data = json.bg[num];
					ctf_update_data();
					break;
				};
			};			
		};
		
		if(!found){
			ctf_cert = json.default_category;
			ctf_start_image = json.default_category_bg_start;
			for(var num in json.bg){
				if($.trim(json.bg[num].category) == $.trim(ctf_cert)){
					found = true;
					ctf_root_image = json.bg_root + '/';
					ctf_root_image = ctf_root_image.replace('//','/');
					ctf_json_data = json.bg[num];
					if(ctf_start_image>ctf_json_data.bg_last){
						ctf_start_image = ctf_json_data.bg_last;
					};
					ctf_update_data();
					break;
				};
			};
		};
	});
};
function ctf_create_fonts(){
	var html = '';
	for(var i=0; i < ctf_fonts.length; i++){
		html += '<option style="font-family: '+ctf_fonts[i]+';">'+ctf_fonts[i]+'</option>';
	};
	ctf_font_select
		.html(html)
		.css('font-family',ctf_fonts[0]);
	html = '';
	for(var i=5; i < 100; i++){
		html += '<option>'+i+'</option>';
	};
	ctf_font_size_select.html(html);
};
function ctf_create_colors(){
	var html = '';
	for(var i=0; i < ctf_colors.length; i++){
		html += '<i data-color="'+ctf_colors[i]+'" class="ctf_color_item" style="background-color: '+ctf_colors[i]+';"></i>';
	};
	ctf_color.html(html);
}
function ctf_msg(msg){
	alert(msg);
};
function ctf_is_upload_support(){
	if(window.FileReader && window.File && window.FileList && window.Blob){
		return true;
	};
	return false;
};
function ctf_get_query(name,el){
	var search = el.location.search, ar;
	if(search.indexOf('?') == -1){
		return null;
	};
	search = decodeURI(search.replace('?',''));
	search = search.split('&');
	for(var i=0; i < search.length; i++){
		ar = search[i].split('=');
		if(ar.length>1 && ar[0] == name){
			return ar[1];
		};
	};
	return null;
};
var ctf_cert = ctf_get_query('cert',window) || false;
if(!ctf_cert){
	ctf_cert = ctf_get_query('cert',parent) || false;	
};
ctf_new_text.val('');
ctf_upload_support = ctf_is_upload_support();
ctf_canvas_support = ctf_is_canvas_support();
ctf_create_fonts();
ctf_create_colors();
ctf_read_json();
};