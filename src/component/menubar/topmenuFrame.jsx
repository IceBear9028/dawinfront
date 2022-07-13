import React from "react";
import styled from "styled-components";
import {TopMenuBarList} from "./menuData";
import TopmenuList from "./topmenuContent";

const Nav = styled.div`
    position : fixed;
    width : 100%;
    height : 65px;
    top : 0px;
    right : 0px;
    background: #F9F9F9;
`

const TopMenu = () => {
    return(
        <>
            <Nav>
                {TopMenuBarList.map((item, index)=>{
                    return <TopmenuList item = {item} key = {index}/>
                })}
            </Nav>
        </>
    )
}

export default TopMenu