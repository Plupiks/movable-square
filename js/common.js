document.addEventListener('DOMContentLoaded', function () {
  // $(document).on('mousedown', function (e) {
  //     var start = {x:e.pageX, y:e.pageY}, end;
  //     $(document).off('mouseup').on('mouseup', function (e) {
  //         end = {x:e.pageX, y:e.pageY};
  //         console.log(start, end)
  //     })
  // });

  $('#resizable').on('click drag kedown', function () {
    var left = parseInt($(this).css('left'));
    var top = parseInt($(this).css('top'));
    var width = parseInt($(this).css('width'));
    var height = parseInt($(this).css('height'));

    $('.left').val(left);
    $('.top').val(top);
    $('.width').val(width);
    $('.height').val(height);
  });

  $('.creat').click(function () {
    $('.creat').removeClass('active');
    $(this).addClass('active');
  });

  // $('body').keydown(function (event) {
  //   if (event.keyCode == 37) {
  //     // alert('Нажато <-');
  //     leftMove += 10;
  //     resizeElem.style.left = `${leftMove}px`;
  //     console.log(leftMove);
  //   } else if (event.keyCode == 38) {
  //     alert('Нажато ^');
  //   } else if (event.keyCode == 39) {
  //     alert('Нажато ->');
  //   } else if (event.keyCode == 40) alert('Нажато v');
  // });

  // Creat Section
  $('.creat_section').click(function () {
    $('section').html(`
		<label>name: <input type="text" class="name"></label>
		<label>optional: <input type="text" class="optional"></label>
		<label>label: <input type="text" class="label"></label>
		<label>left, top: <input type="text" class="top"><input type="text" class="left"></label>
		<label>width,height: <input type="text" class="height"> <input type="text" class="width"></label>
		<label>question: <input type="text" class="question"></label>
		`);
    $('.append').hide();
    $('.apend_section').show();
  });
  $('.apend_section').click(function () {
    var name = $('.name').val();
    var optional_val = $('.optional').val();
    var label_val = $('.label').val();
    var left_val = $('.left').val();
    var top_val = $('.top').val();
    var width_val = $('.width').val();
    var height_val = $('.height').val();
    var question_val = $('.question').val();
    $('#yml pre').append(
      `

	` +
        name +
        `:
		optional: ` +
        optional_val +
        `
		label: ` +
        label_val +
        `
		left-top: [` +
        left_val +
        `,` +
        top_val +
        `]
		width-height: [` +
        width_val +
        `, ` +
        height_val +
        `]
		question: ` +
        question_val +
        `
`
    );

    $('.metki').append(
      `
	<div class="secname">&#60;!--START BLOCK <span class="name">` +
        name +
        `</span>--&#62;</div>
	`
    );
    $('input').val('');
  });

  // Creat Block
  $('.creat_block').click(function () {
    $('section').html(`
		<label>name: <input type="text" class="name"></label>
		<label>label: <input type="text" class="label"></label>
		<label>type: <input type="text" class="type"></label>
		<label>left, top: <input type="text" class="top"><input type="text" class="left"></label>
		<label>width,height: <input type="text" class="height"> <input type="text" class="width"></label>
		<label>question: <input type="text" class="question"></label>
		`);
    $('.append').hide();
    $('.apend_block').show();
  });

  $('.apend_block').click(function () {
    var name = $('.name').val();
    var label_val = $('.label').val();
    var type_val = $('.type').val();
    var left_val = $('.left').val();
    var top_val = $('.top').val();
    var width_val = $('.width').val();
    var height_val = $('.height').val();
    var question_val = $('.question').val();
    $('#yml pre').append(
      `

		inputs:
			` +
        name +
        `:
				label: ` +
        label_val +
        `
				type: ` +
        type_val +
        `
				left-top: [` +
        left_val +
        `,` +
        top_val +
        `]
				width-height: [` +
        width_val +
        `, ` +
        height_val +
        `]
				question: ` +
        question_val +
        `
`
    );

    var namesec = $('.secname:last').children('.name').text();

    $('.metki').append(
      `
	<div class="item">{` +
        namesec +
        `-` +
        name +
        `}</div>
	`
    );
    $('input').val('');
  });

  // Creat Slider
  $('.creat_slider').click(function () {
    $('section').html(`
		<label>name: <input type="text" class="name"></label>
		<label>label: <input type="text" class="label"></label>
		<label>type: <input type="text" class="type"></label>
		<label>gallery: <input type="text" class="gallery"></label>
		<label>left, top: <input type="text" class="top"><input type="text" class="left"></label>
		<label>width,height: <input type="text" class="height"> <input type="text" class="width"></label>
		<label>question: <input type="text" class="question"></label>
		`);
    $('.append').hide();
    $('.apend_slider').show();
  });

  $('.apend_slider').click(function () {
    var name = $('.name').val();
    var label_val = $('.label').val();
    var type_val = $('.type').val();
    var gallery_val = $('.gallery').val();
    var left_val = $('.left').val();
    var top_val = $('.top').val();
    var width_val = $('.width').val();
    var height_val = $('.height').val();
    var question_val = $('.question').val();
    $('#yml pre').append(
      `

		inputs:
			` +
        name +
        `:
				label: ` +
        label_val +
        `
				type: ` +
        type_val +
        `
				gallery: ` +
        gallery_val +
        `
				left-top: [` +
        left_val +
        `,` +
        top_val +
        `]
				width-height: [` +
        width_val +
        `, ` +
        height_val +
        `]
				question: ` +
        question_val +
        `
`
    );

    var namesec = $('.secname:last').children('.name').text();

    $('.metki').append(
      `
	<div class="item">{` +
        namesec +
        `-` +
        name +
        `}</div>
	`
    );
    $('input').val('');
  });

  // Creat Map
  $('.creat_map').click(function () {
    $('section').html(`
		<label>name: <input type="text" class="name"></label>
		<label>label: <input type="text" class="label"></label>
		<label>type: <input type="text" class="type"></label>
		<label>size: <input type="text" class="size"></label>
		<label>left, top: <input type="text" class="top"><input type="text" class="left"></label>
		<label>width,height: <input type="text" class="height"> <input type="text" class="width"></label>
		<label>question: <input type="text" class="question"></label>
		`);
    $('.append').hide();
    $('.apend_map').show();
  });

  $('.apend_map').click(function () {
    var name = $('.name').val();
    var label_val = $('.label').val();
    var type_val = $('.type').val();
    var size_val = $('.size').val();
    var left_val = $('.left').val();
    var top_val = $('.top').val();
    var width_val = $('.width').val();
    var height_val = $('.height').val();
    var question_val = $('.question').val();
    $('#yml pre').append(
      `

		inputs:
			` +
        name +
        `:
				label: ` +
        label_val +
        `
				type: ` +
        type_val +
        `
				size: ` +
        size_val +
        `
				left-top: [` +
        left_val +
        `,` +
        top_val +
        `]
				width-height: [` +
        width_val +
        `, ` +
        height_val +
        `]
				question: ` +
        question_val +
        `
`
    );

    var namesec = $('.secname:last').children('.name').text();

    $('.metki').append(
      `
	<div class="item">{` +
        namesec +
        `-` +
        name +
        `}</div>
	`
    );
    $('input').val('');
  });

  // $(".append").click(function() {
  // 	var pre_elements = document.getElementsByTagName('pre');
  // 	for (var i = 0; i < pre_elements.length; i++)
  // 	{
  // 		var content = pre_elements[i].innerHTML;
  // 		var tabs_to_remove = '';
  // 		while (content.indexOf('\t') == '0')
  // 		{
  // 			tabs_to_remove += '\t';
  // 			content = content.substring(1);
  // 		}
  // 		var re = new RegExp('\n' + tabs_to_remove, 'g');
  // 		content = content.replace(re, '\n');
  // 		pre_elements[i].outerHTML = '<pre>' + content + '</pre>';
  // 	}
  // });

  var clipboard = new ClipboardJS('#button-copy', {
    text: function (trigger) {
      return document.getElementById('yml').innerText.replace(/\n+/g, '\n');
    },
  });

  clipboard.on('success', function (e) {
    e.trigger.classList.add('btn-success');
    setTimeout(function () {
      e.trigger.classList.remove('btn-success');
    }, 3000);
  });

  clipboard.on('error', function (e) {
    alert('Ошибка копирования');
  });
});
