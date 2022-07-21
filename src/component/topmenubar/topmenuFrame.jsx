import React from "react";
import styled from "styled-components";
import {TopMenuBarList, TopMenuLogoutList} from "./topmenuData";
import {TopmenuList, TopmenuLogout} from "./topmenuContent";

const Nav = styled.div`
    position : fixed;
    left : 210px;
    height : 60px;
    top : 10px;
    right : 10px;
    background: #F9F9F9;
    border-radius : 10px;
    box-shadow : -0.4px 1px 2px 0.5px #DADADA;
`


const TopMenu = () => {
    return(
        <>
            <Nav>
                {TopMenuBarList.map((item, index)=>{
                    return <TopmenuList item = {item} key = {index}/>
                })}

                <TopmenuLogout logoutItem={TopMenuLogoutList} />
            </Nav>
        </>
    )
}

export default TopMenu