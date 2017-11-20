//onepagescroll
$(".main-content").onepage_scroll({

});

//hamburger script
(function () {
	var hamburger = document.querySelector('.hamburger');
			hamburger.addEventListener('click', function () {

	var menu = document.querySelector('.header__menu');
			menu.classList.toggle('header__menu_show');

	var line = document.querySelectorAll('.hamburger__line');
			line[0].classList.toggle("hamburger__line_top-js");
			line[1].classList.toggle("hamburger__line_hide-js");
			line[2].classList.toggle("hamburger__line_bottom-js");
	});

}());

//slider script
$(document).ready(function () {
  $('.burger-slider').slick({
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
  });

});
 /* $(function() {

    var moveSlide = function(container, slideNum){
        var items = container.find('.burger-slider__item'),
            activeSlider = items.filter('.active'),
            reqItem = items.eq(slideNum),
            reqIndex = reqItem.index(),
            list = container.find('.burger-slider'),
            duration = 500;

        if (reqItem.length) {
            list.animate({
                'left': -reqIndex * 100 + '%'
            }, duration, function () {
                activeSlider.removeClass('active');
                reqItem.addClass('active');
            });
        }
    }

    $('.slider__arrow').on('click', function(e){
        e.preventDefault();
        
        var $this = $(this),
            container = $this.closest('.slider__wrap'),
            items = container.find('.burger-slider__item')
            activeItems = items.filter('.active'),
            nextItems = activeItems.next(),
            prevItems = activeItems.prev();

        if($this.hasClass('slider__next')){

            if(nextItems.length){
                moveSlide(container, nextItems.index());
            } else {
                moveSlide(container, items.first().index());
            }
            
        } else {

            if (prevItems.length) {
                moveSlide(container, prevItems.index());
            } else {
                moveSlide(container, items.last().index());
            }
        }
        
        
    });

}); //end ready */


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

// yandex map script
ymaps.ready(init);

var burgersMap;
    burgersPlacemark1;
    burgersPlacemark2;
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