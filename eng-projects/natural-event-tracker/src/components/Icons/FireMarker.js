import {Icon} from "@iconify/react"
import fireIcon from "@iconify/icons-mdi/pine-tree-fire"


const FireMarker = ({lat, lng, onClick}) => {
    return (
        <div className="event-marker" onClick={onClick}>
            <Icon icon={fireIcon} className="fire-icon" />
        </div>
    )
}


export default FireMarker


