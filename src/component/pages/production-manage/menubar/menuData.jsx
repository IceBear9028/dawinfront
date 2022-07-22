import React from "react";
import * as FiIcons from 'react-icons/fi';

export const MenuBarList_Visual = [
    {
        title : "모니터링",
        path : 'production-manage/monitoring',
        icon : <FiIcons.FiMonitor /> 
    },
    {
        title : "공정조건 조회",
        path : 'production-manage/data-table',
        icon : <FiIcons.FiServer />
    },
    {
        title : "공정조건 분석",
        path : 'production-manage/analysis',
        icon : <FiIcons.FiBarChart2 /> 
    }
];
