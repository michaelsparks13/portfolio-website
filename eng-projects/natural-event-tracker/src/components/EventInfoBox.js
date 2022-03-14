
const EventInfoBox = ({ info }) => {
    return (
        <div className="eventBox">
            <h2>{ info.title}</h2>
            <ul>
                <li>Date: <strong>{ info.date} </strong></li>
            </ul>
        </div>
    )
}

export default EventInfoBox
