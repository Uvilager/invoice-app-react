import React from "react";

import "./navigation.css";
import logo from "../../assets/logo.svg";
import sun from "../../assets/icon-sun.svg";
import profile from "../../assets/image-avatar.jpg";

function Navigation() {
    return (
        <div>
            <header className="flex">
                <div className="branding flex">
                    <img src={logo} alt="logo" width="40"></img>
                </div>
                <div className="right flex">
                    <div className="dark-light-mode flex">
                        <img
                            src={sun}
                            alt="sun light mode"
                            width="20"
                            height="20"
                        />
                    </div>
                    <div className="avatar">
                        <img src={profile} alt="profile" width="40" />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navigation;
