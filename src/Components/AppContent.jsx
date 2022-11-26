import React, { Suspense } from "react";
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import routes from "../assets/Routes/routes";

const AppContent = () =>{
    return(
        <CContainer lg>
            <Suspense fallback={<CSpinner color="primary"/>}>
                <Routes>
                    {routes.map((route, idx) => {
                        // console.log(route.element);
                        return(
                            route.element && (
                                <Route
                                    key={idx}
                                    path ={route.path}
                                    exact = {route.exact}
                                    name = { route.name }
                                    element = {<route.element/>}
                                />
                                
                            )
                        )
                    })}
                    <Route path ="/" element = {<Navigate to ='home' replace/>}/>
                </Routes>
            </Suspense>
        </CContainer>
    )
}


export default React.memo(AppContent);