import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const ListLink = styled(Link)`
    display : flex;
`;

const ListLabel = styled.span``
//왜 여기는 span으로 묶은거임??

const MenuList = ({item}) => {
    return(
        <ListLink to = {item.path}>
            <div>
                {item.icon}
                <ListLabel>{item.title}</ListLabel>
            </div>
        </ListLink>
    );
};
//변수를 받으면(오브젝트형태) 내부의 parent element 들이 하나씩 변수로 들어가면서 출력됨
//parent element 내부의 child element 이름에 맞게 사용됨
//Link to = "path"


export default MenuList
