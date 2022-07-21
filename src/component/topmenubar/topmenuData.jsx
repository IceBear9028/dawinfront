import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as VsIcons from 'react-icons/vsc';
import * as RIicon from 'react-icons/ri';
import * as TbIcon from 'react-icons/tb';
import * as FiIcon from 'react-icons/fi';

export const TopMenuBarList = [
    {
        title : "재고관리",
        path : "stock-manage",
        icon : null
    },
    {
        title : "생산관리",
        path : "production-manage",
        icon : null
    },
    {
        title : "AI 분석",
        path : "ai-analysis",
        icon : null
    },
    {
        title : "데이터 차트",
        path : "data-chart",
        icon : null
    }

];

export const TopMenuLogoutList = {
        title : "로그아웃",
        path : "#",
        icon : <FiIcon.FiLogOut />
    }
