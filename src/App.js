import React, {useState} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Menubar from "./component/menubar/sidemenuFrame";
import styled from 'styled-components';
import {Histogram, Scatter} from "./component/pages/dataVisual";
import DataView from "./component/pages/dataView";
import TopMenu from './component/menubar/topmenuFrame';

//component 만들때 꼭!!! pascal표기법 사용할 것 !!

const Dashboard = styled.div`
  position: fixed;

  left: 205px;
  top: 70px;
  right : 5px;
  bottom : 5px;

  background: #F9F9F9;
` 

function App() {

  return(
  <>
    <BrowserRouter>
      <TopMenu />
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
