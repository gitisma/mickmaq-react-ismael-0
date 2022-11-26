import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import navigation from '../_Nav'
import {AppSidebardNav} from './AppSidebardNav'


const Sidebard = ()=>{
    const dispatch = useDispatch();
    const unfoldable = useSelector( (state) => state.sidebardUnfoldable);
    const sidebardSohw = useSelector((state)=> state.sidebardSohw )
    return(
        <CSidebar
            position="fixed"
            unfoldable={unfoldable}
            visible = {sidebardSohw}
            onVisibleChange = {(visible)=>{
                dispatch({type: 'set', sidebardSohw: visible})
            }}
        >
            
            <CSidebarBrand className="d-none d-md-flex" to="/">
                <CIcon className="sidebard-brand-full" height={35}/>
                <CIcon className="sidebard-brand-narrow" height={35}/>
            </CSidebarBrand>
            <CSidebarNav>
                <SimpleBar>
                    <AppSidebardNav items={navigation}/>
                </SimpleBar>
            </CSidebarNav>
            <CSidebarToggler
                className="d-none d-lg-flex"
                onClick={()=> dispatch({type: 'set', sidebardUnfoldable: !unfoldable})}
            />
        </CSidebar>
    )
}

export default React.memo(Sidebard)