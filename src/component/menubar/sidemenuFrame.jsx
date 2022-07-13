import React, {useState} from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import {MenuBarList_Visual} from "./menuData";
import MenuList from "./sidemenuContent";

//styled(Link) => html의 <a href="/page1"> 같은 개념임
//메뉴의 기능을 눌렀을 때 해당 라우터 링크로 들어간다.
//이 기능을 사용할 때, app.js에서 react-router-dom을 import 해야 한다.

const Nav = styled.div`
    position: fixed;
    width: 170px;
    height: 100%;
    left: 0px;
    top: 0px;

    background: #1C5485;
    padding: 6px 15px
`;

const Logo = styled.div`
    display : flex;
    height : 70px;
    width : 100%;
    align-items : center;
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
        </Nav>
    </>
    );
};

export default Menubar;
