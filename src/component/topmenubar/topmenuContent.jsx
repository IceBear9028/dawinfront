import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


const ListLink = styled(Link)`
    display : flex;
    justify-content: flex-end;
    float : left;
    align-items : center;
    padding-top : 3px;
    padding-right : 30px;
    padding-left : 30px;
    text-decoration : none;
    height : 58px;
    border-radius : 10px;

    &:hover{
        cursor : pointer;
        background : #DADADA;
        transition : all 0.2s ease;
        
    }

`
const ListLabel = styled.p`
    flex-flow : row nowrap;
    font-size : 18px;
    color : #000;
    
`
const LogoutLink = styled(Link)`
    display :flex;
    justify-content: flex-end;
    float : right;
    align-items : center;
    text-decoration : none;
    height : 58px;
    padding-left : 20px;
    padding-right : 20px;

    &:hover{
        cursor : pointer;
        background : #DADADA;
        transition : all 0.2s ease;
    }
`

const LogoutLabel = styled.p`
    flex-flow : row nowrap;
    font-size : 15px;
    color : #000;
`
const LogoutIcon = styled.p`
    flex-flow : row nowrap;
    font-size : 18px;
    color : #000;
    padding-right : 10px;
`

const TopmenuList = ({item}) => {
    return(
        <>
            <ListLink to = {item.path}>
                <ListLabel>
                    {item.icon}
                </ListLabel>
                <ListLabel>
                    {item.title}
                </ListLabel>
            </ListLink>
        </>
    );
};

const TopmenuLogout = ({logoutItem}) => {
    return(
        <>
            <LogoutLink to = {logoutItem.path}>
                <LogoutIcon>
                    {logoutItem.icon}
                </LogoutIcon>

                <LogoutLabel>
                    {logoutItem.title}
                </LogoutLabel>

                    
            </LogoutLink>
        </>
    )
}

export {TopmenuList, TopmenuLogout}