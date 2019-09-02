ymaps.ready(init);

var myMap;

function init() {
    myMap = new ymaps.Map('map', {
            center: [55.75399399999374, 37.62209300000001],
            zoom: 10,
            behaviors: ['drag']
        }),

        myPlacemark1 = new ymaps.Placemark([55.75399399999374, 37.62209300000001], {
            hintContent: 'Мы всегда Вам рады!',
            balloonContent: 'Кузнецовская ул.16к.5'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -104],

        }),

        myPlacemark2 = new ymaps.Placemark([59.97, 30.30], {
            hintContent: 'У нас всегда вкусно!',
            balloonContent: 'Набережная реки Карповки д.34.'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '.../img/marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -23],

        }),

        myPlacemark3 = new ymaps.Placemark([59.94, 30.36], {
            hintContent: 'Свежее, чем здесь, продуктов Вам не найти!',
            balloonContent: 'ул. Восстания д.28 (вход со двора)'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [0, -57],

        }),

        myPlacemark4 = new ymaps.Placemark([59.91, 30.49], {
            hintContent: 'Мы рады каждому клиенту!',
            balloonContent: 'Товарищеский пр. 32к1'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [0, -57],

        })


    map.geoObjects.add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4);
}