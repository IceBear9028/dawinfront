import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as VsIcons from 'react-icons/vsc';

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

    }
]
