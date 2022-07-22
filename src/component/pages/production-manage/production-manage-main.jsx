import React from 'react';
import Menubar from './menubar/sidemenuFrame';
import {Route,Routes} from 'react-router-dom'
import { MonitoringPage } from './monitoring-page';
import BoardBase from '../../commonElement/boardBase';
import DataTablePage from './dataTable-page'
import AnalysisPage from './analysis-page';

const ProductionManageMainPage = () => {
    return(
        <>      
            <Menubar />
                <BoardBase>
                    <Routes>
                        <Route path = 'production-manage/monitoring' element = {<MonitoringPage/>}/>
                        <Route path = 'production-manage/data-table' element = {<DataTablePage/>}/>
                        <Route path = 'production-manage/analysis'element = {<AnalysisPage/>}/>
                    </Routes>
                </BoardBase>
        </>
    )
}

export default ProductionManageMainPage