import React from 'react'

import WindowControls from '../windowControls/windowControls'

function Header() {
    return (
        <div>
            <WindowControls />
            <div className="header-main">
                <img className="header-logo" />
                <ul className="header-links">
                    <li>Games</li>
                    <li>Social</li>
                    <li>Shop</li>
                    <li>News</li>
                    <li>...</li>
                </ul>
                <div className="header-account">
                    <img className="account-avatar" />
                    <div className="account-name">Name</div>
                    <div className="account-notifications">Bell</div>
                    <div className="account-friends">Friends</div>
                </div>
            </div>
        </div>
    )
}

export default Header