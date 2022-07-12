import React ,{useState}from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const ListLink = styled(Link)`
    display : flex;
    color : #fff;
    justify-content : space-between;
    align-items : center;
    padding-left : 10px;
    padding-top : 11px;
    padding-bottom : 11px;
    list-style : none;
    height : 30px;
    text-decoration : none;
    font-size : 20px;

    &:hover{
        {/*background : #fff; */}
        border-left :3px solid #fff;
        cursor : pointer;
        transition: all 0.2s ease;
    }
`;

const ListLabel = styled.span`
    padding-left : 5px;
    font-size : 16px;
    margin-left : 10px;
`
const DropdownLink = styled(Link)`
    background : #134169;
    display : flex;
    padding-left : 2.3em;
    padding-top : 10px;
    padding-bottom : 10px;
    align-items : center;
    text-decoration : none;
    color : #fff;
    font-size : 15px;

    &:hover{
        background : #fff;
        color : #134169;
        cursor : pointer;
    }
`
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
`
//왜 여기는 span으로 묶은거임?


const MenuList = ({item}) => {
    const [subnav,setSubnav] = useState(false);
    const showSubnav = () => {
        setSubnav(!subnav);
    }

    return(
    <>
        <ListLink to = {item.path} onClick={item.subNav && showSubnav}>
            <div>
                {item.icon}
                <ListLabel>{item.title}</ListLabel>
            </div>
            <div>
                {item.subNav && subnav
                    ? item.iconOpened
                    : item.subNav
                    ? item.iconClosed
                    : null 
                }
            </div>
        </ListLink>
        {subnav && item.subNav.map((item, index)=> {
            return(
                <DropdownLink to={item.path} key={index}>
                    {item.icon}
                    <ListLabel>{item.title}</ListLabel>
                </DropdownLink>
            )
        })}
        <VersionInfo>Ⓒ 2022.DAWIN Solution. All rights reserved.</VersionInfo>
    </>
    );
};
//변수를 받으면(오브젝트형태) 내부의 parent element 들이 하나씩 변수로 들어가면서 출력됨
//parent element 내부의 child element 이름에 맞게 사용됨
//<Link to = "/path"> <- to에 원하는 경로를 적어준다.


export default MenuList
