import nasa_logo from './nasa_logo.png'

function Header() {
    return (
        <header className="header">
            <h1>Natural Event Tracker: Data Provided by</h1><img src={nasa_logo} alt="nasa logo"/>
        </header>
    )
}

export default Header
