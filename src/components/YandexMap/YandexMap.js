import React  from "react";
import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';

const YandexMap = props => {

	const mapState = { 
		center: [45.055531, 41.998845], 
		zoom: 16,
		controls: ['zoomControl','typeSelector', 'fullscreenControl'],
	};

	return (
		<YMaps>
			<Map 
				className='address__item-map'
				defaultState={mapState} 
				modules={['control.ZoomControl','control.TypeSelector', 'control.FullscreenControl']}
			/>
			{/* <Placemark
        // defaultGeometry={mapState.center}
        // modules={['geoObject.addon.balloon']}
        // properties={{
        //   hintContent: 'Собственный значок метки',
        //   balloonContent: 'Это красивая метка'
        // }}
			/> */}
			  {/* <Polyline
				/> */}
		</YMaps>
	)
}

export default YandexMap;

// var myMap = new ymaps.Map('map', {
// 	center: [45.055531, 41.998845],
// 	controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'routeButtonControl'],
// 	zoom: 16
// }, {
// 		searchControlProvider: 'yandex#search'
// 	}),

// 	// Создаём макет содержимого.
// 	MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
// 		'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
// 	),

// 	myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
// 		hintContent: 'Ставрополь, проспект Карла Маркса, 1А',
// 		balloonContent: 'Ставрополь, проспект Карла Маркса, 1А'
// 	}, {
// 			// Опции.
// 			// Необходимо указать данный тип макета.
// 			iconLayout: 'default#image',
// 			// Своё изображение иконки метки.
// 			iconImageHref: '../img/map-yandex.svg',
// 			// Размеры метки.
// 			iconImageSize: [32, 32],
// 			// Смещение левого верхнего угла иконки относительно
// 			// её "ножки" (точки привязки).
// 			iconImageOffset: [-16, -32]
// 		});

// 	var myPolyline = new ymaps.Polyline([
// 					// Указываем координаты вершин ломаной.
// 					[45.055592, 41.998910],
// 					[45.055668, 41.999138],
// 					[45.055551, 41.999222],
// 			], {
// 					// Описываем свойства геообъекта.
// 					// Содержимое балуна.
// 					balloonContent: ""
// 			}, {
// 					// Задаем опции геообъекта.
// 					// Отключаем кнопку закрытия балуна.
// 					balloonCloseButton: false,
// 					// Цвет линии.
// 					strokeColor: "#0d4292",
// 					// Ширина линии.
// 					strokeWidth: 5,
// 					// Коэффициент прозрачности.
// 					strokeOpacity: 1
// 			});


// myMap.geoObjects.add(myPlacemark).add(myPolyline);