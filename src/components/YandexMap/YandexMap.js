import React  from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';

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
			>
				<Placemark
					defaultGeometry={mapState.center}
					modules={['geoObject.addon.balloon']}
					properties={{
						hintContent: 'Ставрополь, проспект Карла Маркса, 1А',
						balloonContent: 'Ставрополь, проспект Карла Маркса, 1А'
					}}
				/>
			</Map>

			 
		</YMaps>
	)
}

export default YandexMap;
