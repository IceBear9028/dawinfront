import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as VsIcons from 'react-icons/vsc';
import * as RIicon from 'react-icons/ri';
import * as TbIcon from 'react-icons/tb';

export const MenuBarList_Visual = [
    {
        title : "데이터 확인",
        path : '/dataView',
        icon : <AiIcons.AiFillDatabase />
    },
    {
        title : "데이터 시각",
        path : '#',
        icon : <AiIcons.AiFillFund />,
        iconClosed : <IoIcons.IoIosArrowDown />,
        iconOpened : <IoIcons.IoIosArrowUp />,
        subNav:[
            {
                title : "히스토그램",
                path : "/dataVisual/histogram",
                icon : <VsIcons.VscGraph />
            },
            {
                title : "산점도",
                path : "/dataVisual/scatter",
                icon : <VsIcons.VscGraphScatter />
            }
        ]

    },
    {
        title : "생산관리",
        path : "/production",
        icon : <RIicon.RiSurveyLine />
    },
    {
        title : "재고관리",
        path : "/Stock_manage",
        icon : <TbIcon.TbBuildingFactory2 />
    },
    {
        title : "AI 분석",
        path : "/AI_analysis",
        icon : <TbIcon.TbDeviceDesktopAnalytics />
    }
];

export const MenuBarList_Stock = [
    {
        title : "test",
        path : "/test",
        icon : null
    },
    {
        title: "test1",
        path : "/test1"
    },
];


export const TopMenuBarList = [
    {
        title : "재고관리",
        path : "/Stock_Manage",
        icon : null
    },
    {
        title : "생산관리",
        path : "/production",
        icon : null
    },
    {
        title : "AI 분석",
        path : "/AI_analysis",
        icon : null
    }

];
