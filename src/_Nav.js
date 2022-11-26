import React from "react";
import CIcon from '@coreui/icons-react';
import { 
    cilBell,
    cilCalculator,
    cilChartPie,
    cilCursor,
    cilDescription,
    cilDrop,
    cilNotes,
    cilPencil,
    cilPuzzle,
    cilSpeedometer,
    cilStar
 } from '@coreui/icons';
 import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';


 const _nav = [
    {
        component: CNavItem,
        name: 'Home',
        to: '/home',
        icon: <CIcon icon={ cilSpeedometer } customClassName = "nav-icon"/>,
        badge:{
            conlor: 'warning',
            text: "New"
        }
    },
    {
        component: CNavTitle,
        name:"Theme"
    },
    {
        component: CNavItem,
        name: "Articles",
        to: "/articles",
        icon: <CIcon icon={ cilDrop } customClassName="nav-icon"/>
    },
    {
        component: CNavItem,
        name: "AjoutArticle",
        to: "/ajoutArticle",
        icon: <CIcon icon={ cilDrop } customClassName="nav-icon"/>
    },
 ]


 export default _nav