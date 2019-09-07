ymaps.ready(init);

var myMap;

function init() {
    myMap = new ymaps.Map('map', {
            center: [55.75399399999374, 37.62209300000001],
            zoom: 10,
            behaviors: ['drag']
        }),

         myPlacemark = new ymaps.Placemark([55.751999, 37.576133], {
            hintContent: 'Мы всегда Вам рады!',
            balloonContent: 'ул.Новый Арбат д.31/12'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -104],

        }),

        myPlacemark2 = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Мы заботимся о Вашем здоровье!',
            balloonContent: 'Севастопальский пр.22 '
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/marker.png',
            // Размеры метки.
            iconImageSize: [46, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]


        })


     myMap.geoObjects.add(myPlacemark)
        .add(myPlacemark2)
        
}