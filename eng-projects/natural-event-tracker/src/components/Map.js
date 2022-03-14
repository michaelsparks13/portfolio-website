import {useState} from "react"

import GoogleMapReact from "google-map-react"
import FireMarker  from "./Icons/FireMarker"
import VolcanoMarker  from "./Icons/VolcanoMarker"
import HurricaneMarker  from "./Icons/HurricaneMarker"
import EventInfoBox from "./EventInfoBox"

const coordinatesList = []


const Map = ({ eventData, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)


    const markers = eventData.map(e => {
        if(e.categories[0].id === 8) {
            return <FireMarker lat={e.geometries[0].coordinates[1]} 
            lng={e.geometries[0].coordinates[0]} 
            onClick={() => setLocationInfo({id: e.id, title: e.title, date: e.geometries[0].date})}
            />
        } else if (e.categories[0].id === 12) {
            return <VolcanoMarker lat={e.geometries[0].coordinates[1]} 
            lng={e.geometries[0].coordinates[0]} 
            onClick={() => setLocationInfo({id: e.id, title: e.title, date: e.geometries[0].date})}
            />
        }
        // } else if (e.categories[0].id === 10) {
        //      for (let i=0; i < e.geometries.length; i++) {
        //         let coordinate = {}
        //         coordinate['lng'] = e.geometries[i].coordinates[0]
        //         coordinate['lat'] = e.geometries[i].coordinates[1]
        //         coordinatesList.push(coordinate)
        //     } 
        //     return coordinatesList.map(coordinate) => (
        //                 <HurricaneMarker lat={coordinate.lat} lng={coordinate.lng}/>
        //                 )
        

        //       // <HurricaneMarker lat={coordinatesList[i]['lat']} 
        //         // lng={coordinatesList[i]['lng']}
        //         // onClick={() => setLocationInfo({id: e.id, title: e.title, date: e.geometries[0].date})}
        //         // />


        //         // return <HurricaneMarker lat={e.geometries[0].coordinates[1]} 
        //         // lng={e.geometries[0].coordinates[0]}
        //         // onClick={() => setLocationInfo({id: e.id, title: e.title, date: e.geometries[0].date})}
        //         // /> 

        //     }
            return null
    })

    return (
        <div className="map">
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPS_API_KEY}}
            defaultCenter={center}
            defaultZoom={zoom}>

            {markers}
            </GoogleMapReact>
            {locationInfo && <EventInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 39.155269335871594,
        lng: -111.81747603732389
    }, 
    zoom: 6
}

export default Map
