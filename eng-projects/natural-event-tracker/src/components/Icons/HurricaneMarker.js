import {Icon} from "@iconify/react"
import hurricaneIcon from "@iconify/icons-mdi/weather-hurricane"


const HurricaneMarker = ({lat, lng, onClick}) => {
    return (
        <div className="event-marker" onClick={onClick}>
            <Icon icon={hurricaneIcon} className="hurricane-icon" />
        </div>
    )
}


export default HurricaneMarker


