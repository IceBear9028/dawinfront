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
                    {/*a태그 href 속성 -> 해당 링크로 이동시켜줌*/}
                    <a href = "data">
                        <i className ='bx bx-data'></i>
                        <span className = "linkName">데이터 확인</span>
                    </a>
                </ol>
                <ol>
                    <a href = "dataVisual">
                        <i className='bx bx-chart' ></i>
                        <span className = "linkName">데이터 시각</span>
                    </a>
                </ol>
            </ul>
                
            <h4 className = "info">Ⓒ 2022.DAWIN Solution. All rights reserved.</h4>
                
        </div>
    )
}

export default MenuBar;
