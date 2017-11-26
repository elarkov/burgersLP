//One Page Scroll
const display = $('.main-content');
const sections = $('section');

let inScroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const switchMenuActiveClass = sectionEq => {
	$('.nav-scroll__item').eq(sectionEq).addClass('active')
		.siblings().removeClass('active');
}

const performTransition = sectionEq => {

if(inScroll) return

	inScroll == true

	const position = (sectionEq * -100) + '%';

	display.css({
		'transform': `translate(0, ${position})`,
		'-webkit-transform': `translate(0, ${position})`
	})

	sections.eq(sectionEq).addClass('active')
		.siblings().removeClass('active');

		setTimeout(() => {
			inScroll = false;
			switchMenuActiveClass(sectionEq);
		}, 700);
}
		
const difineSections = sections => {
	const activeSection = sections.filter('.active');
		return {
			activeSection: activeSection,
			nextSection: activeSection.next(),
			prevSection: activeSection.prev()
		}
}

const scrollToSection = direction => {
	const section = difineSections(sections)

		if (inScroll) return;

		if (direction === 'up' && section.nextSection.length) { // вниз
			performTransition(section.nextSection.index())
		}

		if (direction === 'down' && section.prevSection.length) { // вверх
			performTransition(section.prevSection.index())
		}
}

$('.wrapper').on({
	wheel: e => {
		const deltaY = e.originalEvent.deltaY;
		let direction = (deltaY > 0)
			? 'up'
			: 'down'

		scrollToSection(direction);
	},
	touchmove: e => (e.preventDefault())
});

$(document).on('keydown', e => {
	const section = difineSections(sections);

	if (inScroll) return

	switch (e.keyCode) {
		case 40: // вверх
			if (!section.nextSection.length) return;
			performTransition(section.nextSection.index());
			break;

		case 38: //вниз
			if (!section.prevSection.length) return;
			performTransition(section.prevSection.index());
			break;
	}
});

if (isMobile) {
	$(window).swipe({
		swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
			console.log(direction);
			scrollToSection(direction);
		}
	})
}

$('[data-scroll-to]').on('click touchstart', e => {
	e.preventDefault();
	const $this = $(e.currentTarget);
	const sectionIndex = parseInt($this.attr('data-scroll-to'));

	performTransition(sectionIndex);
});


//hamburger script
(function () {
	var hamburger = document.querySelector('.hamburger');
			hamburger.addEventListener('click', function () {
				


	var menu = document.querySelector('.header__menu');
			menu.classList.toggle('header__menu_show');
				document.body.style.overflow = 'hidden';

	var line = document.querySelectorAll('.hamburger__line');
			line[0].classList.toggle("hamburger__line_top-js");
			line[1].classList.toggle("hamburger__line_hide-js");
			line[2].classList.toggle("hamburger__line_bottom-js");
	});

}());

//slider script
$(function () {

  $('.burger-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>'
  });

});
 
//fancybox modal script
$(function(){

  $("[data-fancybox]").fancybox({
      
  });

});

// vertical accordion script team
$(function () {
	$('.accordion__item').on('click', function(e){
		e.preventDefault();

			var $this = $(this),
					item = $this.closest('.accordion__item'),
					list = $this.closest('.accordion'),
					items = list.find('.accordion__item'),
					content = item.find('.accordion__desc'),
					otherContent = list.find('.accordion__desc'),
					duration = 300;

			if (!item.hasClass('accordion__item_active')){

				items.removeClass('accordion__item_active')
				item.addClass('accordion__item_active')

				otherContent.stop(true, true).slideUp(duration);
				content.stop(true, true).slideDown(duration);

			} else {

				content.stop(true, true).slideUp(duration);
				item.removeClass('accordion__item_active');

			}
	});

});


/*(function() {
var accordionItem = document.querySelectorAll('.accordion__item');

	for (var i = 0; i < accordionItem.length; i++) {
		accordionItem[i].addEventListener('click', function(e) {
			e.preventDefault();
            this.classList.toggle('accordion__item_active');
			if((this.classList.contains('accordion__item_active'))){
				for (var i = 0; i < accordionItem.length; i++) {
					accordionItem[i].classList.remove('accordion__item_active');
				}
				this.classList.add('accordion__item_active');
			}
		});
	}
}());*/

//horizontal accordion script menu
(function(){
	var menuAccordionItem = document.querySelectorAll('.menu-accordion__item');
		for (var i = 0; i < menuAccordionItem.length; i++) {
			menuAccordionItem[i].addEventListener('click', function(e){
				e.preventDefault();

				this.classList.toggle('menu-accordion__item_active');

				if ((this.classList.contains('menu-accordion__item_active'))) {

					for (var i = 0; i < menuAccordionItem.length; i++) {
						menuAccordionItem[i].classList.remove('menu-accordion__item_active');
					}
					this.classList.add('menu-accordion__item_active');
				}

			});
		}
}());

//form script ajax

$("#form-order").submit(function () { 
	var form = $(this);
	$.ajax({
		type: "POST",
		url: "server.php", 
		data: form.serialize()
	}).done(function () {
		
	});
	return false;
});


//validate form script
$(function(){
    $('#form-order').validate({
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true,
                digits: true
            },
            street: {
                required: true
            },
            home: {
                required: true,
                digits: true
            },
            shape: {
                digits: true
            },
            flat: {
                required: true,
                digits: true
            },
            floor: {
                digits: true
            }
        },
        focusCleanup: true,
		focusInvalid: false,
		submitHandler: function (form) {

				/*второй вариант
				var form = $('#form-order');
				$('#submit').attr('disabled')
				$.ajax({
					type: "POST",
					url: "server.php",
					data: form.serialize()
				}).done(function () {
					form.find('#submit').attr('disabled', 'disabled');
					$.fancybox.open({
						src: '#form-modal',
						type: 'inline',
						afterClose: function () {
							form.trigger("reset");
						}
					});
				});*/
			var form = $('#form-order');
			$.fancybox.open({
				src: '#form-modal',
				type: 'inline',
				afterClose: function () {
					form.trigger("reset");
				}
			});
			
		},

        invalidHandler: function(event, validator){
            $('.js-message').text('Пожалуйста заполните необходимые поля')
        },
        onkeyup: function(element) {
			$('.js-message').text('')
			
        },
        errorPlacement: function(error, element) {
            return true
        }
    });
});


// yandex map script
ymaps.ready(init);

var burgersMap,
    burgersPlacemark1,
    burgersPlacemark2,
    burgersPlacemark3;

function init(){     
    burgersMap = new ymaps.Map("map", {
        center: [55.04286342, 82.92604201],
        zoom: 17
    });

    burgersMap.controls
        .remove('zoomControl') 
        .remove('geolocationControl') 
        .remove('trafficControl')
        .remove('typeSelector')
        .remove('fullscreenControl')
        .remove('searchControl');

    burgersMap.behaviors.disable([
        'drag',
        'scrollZoom'
    ]);

    burgersPint = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-30, -60]
     });

		burgersPlacemark1 = new ymaps.Placemark([55.04262006, 82.92622172], { 
        balloonContentHeader: '<img class="logo__img_map" src="img/logo.svg" alt="logo"><span class="js-headerBalloon">Burgers Food</span>',
        balloonContentBody: 'Здесь бузумно вкусные бургеры',
        balloonContentFooter: 'Мы делаем натуральные бургеры',
        hintContent: 'Комбинат быстрого питания Burgers Food'
    });

    burgersPlacemark2 = new ymaps.Placemark([55.04328851, 82.92443134], { 
        balloonContentHeader: '<img class="logo__img_map" src="img/logo.svg" alt="logo"><span class="js-headerBalloon">Burgers Food</span>',
        balloonContentBody: 'Здесь бузумно вкусные бургеры',
        balloonContentFooter: 'Мы делаем натуральные бургеры',
        hintContent: 'Комбинат быстрого питания Burgers Food'
    });

    burgersPlacemark3 = new ymaps.Placemark([55.04378137, 82.92702906], { 
        balloonContentHeader: '<img class="logo__img_map" src="img/logo.svg" alt="logo"><span class="js-headerBalloon">Burgers Food</span>',
        balloonContentBody: 'Здесь бузумно вкусные бургеры',
        balloonContentFooter: 'Мы делаем натуральные бургеры',
        hintContent: 'Комбинат быстрого питания Burgers Food'
    });

    burgersPint.add(burgersPlacemark1).add(burgersPlacemark2).add(burgersPlacemark3);
    burgersMap.geoObjects.add(burgersPint);
}