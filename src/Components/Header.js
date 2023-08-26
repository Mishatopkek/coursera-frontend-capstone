import Navigation from "./Navigation";
import './Header.css'

const Header = () => {
    return (
        <header>
            <meta name="description" content="your text goes here"/>
            <meta name="og:title" content=""/>
            <meta name="og:description" content=""/>
            <meta name="og:image" content=""/>
            <img className="logo" src="https://cdn.discordapp.com/attachments/517350270871797768/1145014195885178980/a5da8536fc99c51e00d4d13628bd9745.png" alt="Logo"/>
            <Navigation/>
        </header>)
};

export default Header;