import React from "react"
import cinecoin from "../img/cinecoin.png"
import './Header.css'

function Header() {
    return (
        <header>
            <div className="header--logo">
                <a href="/">
                    <img src={cinecoin} alt="logo" />
                </a>
            </div>
            <div className="header--title">
                CinéCoin
            </div>
        </header>
    )
}

export default Header;