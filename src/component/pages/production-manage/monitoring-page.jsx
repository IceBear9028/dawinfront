import React from "react";
import styled from "styled-components";
import DashBoard from "../../commonElement/boardBase";
import HeadTitle from "../../commonElement/HeadTitle";

const BoardChild_info = styled.div`
    float : left;
    display : flex;
    height : 770px;
    width : 300px;
    background : #AFFFEE; //하늘색
    margin : 5px;
`


const BoardChild_main = styled.div`
    display : flex;
    height : 500px;
    background : #FAF58C; //노란색
    margin : 5px;
`

const BoardChild_roller = styled.div`
    display : flex;
    background: #FFCAD5; //핑크색
    height : 100px;
    margin : 5px;
`
const BoardChild_equip = styled.div`
    float : right;
    display : flex;
    background : #DC9146; //갈색
    width : 300px;
    height : 160px;
    margin : 5px;
`

const BoardChild_surrounding = styled.div`
    display : flex;
    background: #CE69E7; //보라색
    width : auto;
    height : 160px;
    margin : 5px;
`



export const MonitoringPage = () => {
    return(
        <>
            <HeadTitle>모니터링</HeadTitle>
            <BoardChild_info>

            </BoardChild_info>
            <BoardChild_main>
                
            </BoardChild_main>

            <BoardChild_roller>
            </BoardChild_roller>

            <BoardChild_equip>

            </BoardChild_equip>
            <BoardChild_surrounding>
                
            </BoardChild_surrounding>
        </>
    )
}
