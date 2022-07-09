import React from "react";
import "./menu.css"

function MenuBar(){
    return(
        <div className = "menuBox">
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
            <div className = "logo">
                <img className = "logo_dawin" alt = "logo" src = "../img/logo_dawin.png"></img>
            </div>

            <ul className = "linkList">
                <ol>
                    <a href = "#">
                        <i className ='bx bx-data'></i>
                        <span className = "linkName">데이터 확인</span>
                    </a>
                </ol>
                <ol>
                    <a href = "#">
                        <i className='bx bx-chart' ></i>
                        <span className = "linkName">데이터 시각</span>
                    </a>
                </ol>
            </ul>

        </div>
    )
}

export default MenuBar;
