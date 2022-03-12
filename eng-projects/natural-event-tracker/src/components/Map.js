import {useState} from "react"

import GoogleMapReact from "google-map-react"
import FireMarker  from "./Icons/FireMarker"
import VolcanoMarker  from "./Icons/VolcanoMarker"
import EventInfoBox from "./EventInfoBox"


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
