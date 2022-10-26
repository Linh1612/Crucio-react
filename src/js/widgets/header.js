import React from "react";

export default function Header(){
    return(
        <div id="header">
            <div className="header-content1">
                <a href="#logo"><img className="logo" src="https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg" alt="logo"/></a>
                <button className="btn">Buy now</button>
            </div>
            <div className="header-content2">
                <a href="#logo"><img src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/05/logo-1.png" alt="logo"/></a>
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#team">TEAM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" 
                            href="https://preview.themeforest.net/item/crucio-responsive-one-page-wordpress-theme/full_screen_preview/19973422">
                            BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
 }