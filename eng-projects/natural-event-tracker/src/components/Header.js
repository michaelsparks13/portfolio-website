import nasa_logo from './nasa_logo.png'

function Header() {
    return (
        <header className="header">
            <h1>Natural Event Tracker</h1>
            <h2>Data Provided by</h2> <img src={nasa_logo} alt="nasa logo"/>
        </header>
    )
}

export default Header
