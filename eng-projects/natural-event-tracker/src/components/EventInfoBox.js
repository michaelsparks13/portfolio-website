
const EventInfoBox = ({ info }) => {
    return (
        <div className="eventBox">
            <h2>Event Info</h2>
            <ul>
                <li>ID: <strong>{ info.id} </strong></li>
                <li>Title: <strong>{ info.title} </strong></li>
                <li>Date: <strong>{ info.date} </strong></li>
            </ul>
        </div>
    )
}

export default EventInfoBox
