import React from "react";
import "./topBar.scss";
import {Link} from "react-router-dom"
import Logo from "../../images/logo.png"
import Search from "../../images/search.png"

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbar__container">
                <div className="topbar__left">
                    <Link to="/" className="topbar__logo">
                        <img src={Logo} alt="Logo" className="topbar__logo-img" />
                    </Link>
                </div>
                <div className="topbar__center">
                    <ul className="topbar__list">
                        <li className="topbar__list-item">Inicio</li>
                        <li className="topbar__list-item">Sobre Nosotros</li>
                        <li className="topbar__list-item">Educacion</li>
                        <li className="topbar__list-item">Noticias</li>
                        <li className="topbar__list-item">Just Trade!</li>
                    </ul>
                </div>
                <div className="topbar__right">
                    <ul className="topbar__right-list">
                        <li className="topbar__right-item">
                            <img src={Search} alt="Search" className="topbar__right-img" />
                        </li>
                        <li className="topbar__right-item">
                            <Link to="/" className="topbar__right-button">
                                Ingresa
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopBar;