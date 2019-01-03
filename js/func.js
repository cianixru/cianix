var data = {};
$(document).ready(function() {
	upload('.upload');
});
function upload(button){
	if($(button).find('form').length > 0) $(button).find('form').remove();
	$(button).ajaxUpload({
		url: 'index.php',
		method: 'POST',
		name: 'file',
		dataType: 'json',
		data: {
			is_ajax: true,
			module: 'main',
			action: 'upload',
		},
		onSubmit: function(){
		},
		onComplete: function(response){
			$('[data-id="filename"]').text(response);
		}
	});
}
$(document).on('click','[data-button="one_save"]',function(){
	$('[data-form="one"]').find('input, select, textarea').each(function(){
		var obj = $(this),
			key = $(this).attr('data-id'),
			val = '';
		if(obj.get(0).tagName == 'SELECT'){
			val = obj.find(':selected').val();
			data[key] = val;
		}
		else if(obj.get(0).tagName == 'INPUT' && obj.attr('type') == 'checkbox'){
			data[key] = obj.is(':checked')?1:0;
		}
		else if(obj.get(0).tagName == 'INPUT' && obj.attr('type') == 'radio'){
			data[key] = obj.is(':checked')?1:0;
		}
	});
});
$(document).on('submit','#main_form',function(e){
	e.preventDefault();
	data['is_ajax'] = true;
	data['module'] = 'main';
	data['action'] = 'send_form';
	var canSend = true,
		type_arr = new Array('text','email','tel');
	$('#main_form').find('input, textarea').each(function(){
		var obj = $(this),
			key = $(this).attr('data-id'),
			val = '';
		if(in_array(type_arr,obj.attr('type')) || obj.get(0).tagName == 'TEXTAREA'){
			data[key] = obj.val();
		}
	});
	if(canSend){
		$.ajax({
			type:'post',
			url:'index.php',
			dataType:'json',
			data:data,
			success:function(response){
				if(response.status){
					$('#main_form').find('[data-id="name"],[data-id="email"],[data-id="phone"],[data-id="note"]').val('');
					$('[data-id="filename"]').text('Прикрепить файл');
					$('input[type="file"]').val('');
					var button = document.getElementsByClassName('form_main_action')[0];
					button.innerText = 'СПАСИБО!';
					button.setAttribute('disabled','disabled');
					setTimeout(function () {
						button.removeAttribute('disabled');
                        button.innerText = 'Оставить заявку';
						$('#main').click();
                    }, 3000);
				}
			}
		});
	}
});
$(document).on('submit','#feedback_form_1',function(e){
	e.preventDefault();
	data['is_ajax'] = true;
	data['module'] = 'main';
	data['action'] = 'send_short_form';
	var canSend = true,
		type_arr = new Array('text','email','tel');
	$('#feedback_form_1').find('input').each(function(){
		var obj = $(this),
			key = $(this).attr('data-id'),
			val = '';
		if(in_array(type_arr,obj.attr('type'))){
			data[key] = obj.val();
		}
	});
	if(canSend){
		$.ajax({
			type:'post',
			url:'index.php',
			dataType:'json',
			data:data,
			success:function(response){
				if(response.status){
					$('#feedback_form_1').find('[data-id="name"],[data-id="email"],[data-id="phone"]').val('');
					var button = document.getElementsByClassName('content_block_4_feedback_button')[0];
					button.innerText = 'СПАСИБО!';
					button.setAttribute('disabled','disabled');
					setTimeout(function () {
						button.removeAttribute('disabled');
                        button.innerText = 'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ';
                    }, 3000);
				}
			}
		});
	}
	return false;
});
function in_array(arr,key){
    for (var k in arr) {
        if (arr[k] == key) {
            return true;
        }
    }
}