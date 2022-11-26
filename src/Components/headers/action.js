import React,{ useContext } from "react";
import {UserContext} from "../../Contexts/ContextUser";
import {
    CAvatar,
    CBadge,
    CDropdown,
    CDropdownDivider,
    CDropdownHeader,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle
} from '@coreui/react'

import {
    cilBell,
    cilCreditCard,
    cilCommentSquare,
    cilEnvelopeOpen,
    cilFile,
    cilLockLocked,
    cilSettings,
    cilTask,
    cilUser
} from '@coreui/icons'


import CIcon from "@coreui/icons-react";
import avatar6 from '../../assets/images/mickmaq.jpg'

const Action = (props) =>{
    const currentUser = useContext(UserContext)
    const logout = ()=>{
        props.logout()
    }
    return(
        <CDropdown variant="nav-item">
            <CDropdownToggle placement = "bottom-end" className="py-0" caret={false}>
                { currentUser.currentUser ?(
                    <CIcon icon={ cilUser } className="me-2"/> 
                    ):(
                        <CAvatar src={ avatar6 } size ="md"/>
                    ) }
                    { currentUser.currentUser? (currentUser.currentUser.nom):("") }
                
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement = "bootom-end">
                {/* <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader> */}
                {/* <CDropdownItem href="#">
                    <CIcon icon={cilBell} className="me-2"/>
                    Update
                    <CBadge color="info" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem> */}
                {/* <CDropdownItem href="#">
                    <CIcon icon={cilEnvelopeOpen} className="me-2"/>
                    Messages
                    <CBadge color="danger" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem> */}
                {/* <CDropdownItem href="#">
                    <CIcon icon={cilCommentSquare} className="me-2"/>
                    Comments
                    <CBadge color="warning" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem> */}
                <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
                <CDropdownItem href="#">
                    <CIcon icon={cilUser} className="me-2"/>
                    Profile
                </CDropdownItem>
                <CDropdownItem href="#">
                    <CIcon icon={cilSettings} className="me-2"/>
                    Settings
                </CDropdownItem>
                {/* <CDropdownItem href="#">
                    <CIcon icon={cilCreditCard} className="me-2"/>
                    payements
                    <CBadge color="secondary" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem> */}
                {/* <CDropdownItem href="#">
                    <CIcon icon={cilFile} className="me-2"/>
                    Project
                    <CBadge color="primary" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem> */}
                <CDropdownDivider/>
                <CDropdownItem onClick={logout}>
                    <CIcon icon={cilLockLocked} className="me-2"/>
                    Lock Account
                </CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    )
}

export default Action