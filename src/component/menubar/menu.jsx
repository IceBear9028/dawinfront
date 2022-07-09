import React from "react";
import "./menu.css"

function MenuBar(){
    return(
        <div className = "menuBox">
            
            <img className = "logo_dawin" alt = "logo" src = "../img/logo_dawin.png"></img>

            <div className = "menubutton1">
                <div className = "menuLine1"></div>
                <div className = "menuText1">데이터 형태</div>
            </div>

            <div className = "menubutton2">
                <div className = "menuLine2"></div>
                <div className = "menuText2">데이터 시각</div>
            </div>

        </div>
    )
}

export default MenuBar;
