import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import{
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderDivider,
    CHeaderNav,
    CHeaderToggler,
    CNavLink,
    CNavItem
} from '@coreui/react'
import CIcon from "@coreui/icons-react";
import { cilBell, cilEnvelopeOpen, cilList, cilMenu, cilLaptop } from '@coreui/icons'

import  Action  from "./headers/action";

const AppHeadder = (props)=>{
    const dispatch = useDispatch();
    const sidebardSohw = useSelector((state)=> state.sidebardSohw)
    const logout = ()=>{
        props.logout()
    }
    return(
        <CHeader position="sticky" className="mb-4">
            <CContainer fluid>
                <CHeaderToggler className="ps-1" onClick={()=>{ dispatch({ type: 'set', sidebardSohw: !sidebardSohw }) }}>
                    <CIcon icon={cilMenu} size='lg'/>
                </CHeaderToggler>
                <CHeaderBrand className="mx-auto d-md-none" to="/">
                    <CIcon icon={ cilLaptop } height={48} alt="logo"/>
                </CHeaderBrand>
                <CHeaderNav className="d-none d-md-flex me-auto">
                    <CNavItem>
                        <CNavLink to="/" component={NavLink}>
                            Dashnoard
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">USer</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Settings</CNavLink>
                    </CNavItem>
                </CHeaderNav>
                <CHeaderNav>
                    <CNavItem>
                        <CNavLink href="#">
                            <CIcon icon={cilBell} size="lg"/>
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">
                            <CIcon icon={cilList} size="lg"/>
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">
                            <CIcon icon={cilEnvelopeOpen} size="lg"/>
                        </CNavLink>
                    </CNavItem>
                </CHeaderNav>
                <CHeaderNav className="ms-3">
                    <Action logout = { logout }/>
                </CHeaderNav>
            </CContainer>
            <CHeaderDivider/>
        </CHeader>
    )
}
export default AppHeadder