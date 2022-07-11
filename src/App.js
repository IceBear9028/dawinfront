import React, {useState} from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import './App.css';
import Menubar from "./component/menubar/menu";
import styled from 'styled-components';

//component 만들때 꼭!!! pascal표기법 사용할 것 !!

function App() {
  return(
    <BrowserRouter>
      <Menubar />
    </BrowserRouter> 
  );
}
//component에 react-router-dom의 내부 component 사용되었으면 꼭 <BrowserRouter>로 태그 감싸줘야 함.
export default App;
