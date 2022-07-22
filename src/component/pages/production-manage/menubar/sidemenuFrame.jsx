import React from "react";
import styled from "styled-components";
import {MenuBarList_Visual, MenuBarList_Stock} from "./menuData";
import MenuList from "./sidemenuContent";

//styled(Link) => html의 <a href="/page1"> 같은 개념임
//메뉴의 기능을 눌렀을 때 해당 라우터 링크로 들어간다.
//이 기능을 사용할 때, app.js에서 react-router-dom을 import 해야 한다.

const Nav = styled.div`
    position: fixed;
    width: 175px;
    bottom :10px;
    left: 10px;
    top: 10px;
    background: #1C5485;
    padding-left : 10px;
    padding-right : 10px;
    border-radius : 10px;
    box-shadow : -0.3px 1px 1.5px 1px #909090;
`;

const Logo = styled.div`
    display : flex;
    height : 90px;
    width : 100%;
    align-items : center;
    padding : 0px 10px;
`;

const VersionInfo = styled.p`
    position: absolute;
    width: 124px;
    height: 24px;
    left: 39px;
    bottom: 20px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;

    color: #FFFFFF;
`;

const Menubar = () => {
    return(
    <>
        <Nav>
            <Logo>
                <img className = "logo_dawin" alt = "logo" src = "../img/logo_dawin.png"></img>
            </Logo>
            {MenuBarList_Visual.map((item,index) => {
                return <MenuList item = {item} key = {index}/>;
            })}
            <VersionInfo>Ⓒ 2022.DAWIN Solution. All rights reserved.</VersionInfo>
        </Nav>
    </>
    );
};

export default Menubar;
