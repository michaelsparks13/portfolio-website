import spinner from './spinner.gif'

function Loader() {
    return (
        <div className="loader">
            <img src={spinner} alt="loading"/>
            <h1>NASA is beaming down the data...</h1>
        </div>
    )
}

export default Loader
