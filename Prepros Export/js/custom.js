
//slider

$('.burger-slider').slick({
  arrows: true,
});

/*$(".js-slider-prev").on("click", function () {
  $('.burger-slider__item').slick("slickPrev");
});

$(".js-slider-next").on("click", function () {
  console.log('done');
  $('.burger-slider__item').slick("slickNext");
});*/

//hamburger script
(function () {
    
    var fullscreenmenu = document.querySelector(".header__menu");
    
    var strokes = document.querySelectorAll(".hamburger__line"),
        icon = document.querySelector(".hamburger"),
        fullscreenmenu = document.querySelector(".header__menu");
  
    function transformStart() {

        strokes[0].classList.toggle("hamburger__line_top-js")
        strokes[1].classList.toggle("hamburger__line_hide-js");
        strokes[2].classList.toggle("hamburger__line_bottom-js");
        fullscreenmenu.classList.toggle("header__menu_show");
    }
    
    icon.addEventListener("click", transformStart);

})();




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