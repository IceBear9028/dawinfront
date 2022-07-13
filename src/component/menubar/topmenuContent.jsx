import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


const ListLink = styled(Link)`
    diplay : flex;
    justify-content: flex-end;
    float : right;
    align-items : center;
    padding-top : 3px;
    padding-right : 30px;
    padding-left : 30px;
    text-decoration : none;
    height : 62px;

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
const Space = styled.div`
    height : 62px;
    width : 20px;
    top : 0px;
    right : 0px;
`
const TopmenuList = ({item}) => {
    return(
        <>
            <ListLink to = {item.path}>
                <ListLabel>
                    {item.title}
                </ListLabel>
            </ListLink>
        </>
    );
};

export default TopmenuList