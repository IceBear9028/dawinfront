import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import TopMenu from './component/topmenubar/topmenuFrame';
import DataChart from './component/pages/data-chart/data-chart';
import ProductionManageMainPage from './component/pages/production-manage/production-manage-main'
//component 만들때 꼭!!! pascal표기법 사용할 것 !!


function App() {
  return(
  <>
    <BrowserRouter>
      <TopMenu/>{/* <- Link 가 담겨져 있는 component */}
      <Routes>
        <Route path = '/data-chart/*' element = {<DataChart />}/>
        <Route path = '/ai-analysis/*'/>
        <Route path = '/production-manage/*' element = {<ProductionManageMainPage/>} />
        <Route path = '/stock-manage/*'/>
      </Routes>
    </BrowserRouter>
  </>
  );
}
//component에 react-router-dom의 내부 component 사용되었으면 꼭 <BrowserRouter>로 태그 감싸줘야 함.
export default App;
