import React from 'react';
import Menubar from './menubar/sidemenuFrame';
import styled from 'styled-components';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import DataView from './dataView';
import {Histogram,Scatter} from './dataVisual';

const Dashboard = styled.div`
  position: fixed;

  left: 205px;
  top: 70px;
  right : 5px;
  bottom : 5px;
` 
const DataChart = () => {
    return (
        <>
                <Menubar />
                <Dashboard>
                    <Routes>
                        <Route path = 'dataView' element = {<DataView/>} />
                        <Route path = 'dataVisual/histogram' element = {<Histogram/>} />
                        <Route path = 'dataVisual/scatter' element = {<Scatter/>} />
                    </Routes>
                </Dashboard>
        </>
    )
}

export default DataChart