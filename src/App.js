import React, {useState} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Menubar from "./component/menubar/menu";
import styled from 'styled-components';
import {Histogram, Scatter} from "./component/pages/dataVisual";
import DataView from "./component/pages/dataView";

//component 만들때 꼭!!! pascal표기법 사용할 것 !!

const Dashboard = styled.div`
  position: absolute;
  width: 1199px;
  height: 863px;
  left: 224px;
  top: 141px;

  background: #F9F9F9;
` 

function App() {

  return(
  <>
    <BrowserRouter>
      <Menubar />
        <Dashboard>
          <Routes>
            <Route path = '/dataView' element = {<DataView/>} />
            <Route path = '/dataVisual/histogram' element = {<Histogram/>} />
            <Route path = '/dataVisual/scatter' element = {<Scatter/>} />
          </Routes>
        </Dashboard>
    </BrowserRouter>
  </>
  );
}
//component에 react-router-dom의 내부 component 사용되었으면 꼭 <BrowserRouter>로 태그 감싸줘야 함.
export default App;
