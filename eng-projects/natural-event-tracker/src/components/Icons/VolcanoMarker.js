import {Icon} from "@iconify/react"
import volcanoIcon from "@iconify/icons-mdi/image-filter-hdr"

const VolcanoMarker = ({lat, lng, onClick}) => {
    return (
        <div className="event-marker" onClick={onClick}>
            <Icon icon={volcanoIcon} className="volcano-icon" />
        </div>
    )
}

export default VolcanoMarker