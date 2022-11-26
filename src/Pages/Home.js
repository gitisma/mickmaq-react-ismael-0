import React, { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie"
import axios from "axios";
import AppHeadder from "../Components/AppHeader";
import { Provider } from 'react-redux'
import store from '../store';
// import { context } from "../Components/ContextUser";
import { UserContext } from "../Contexts/ContextUser";
import { Sidebars } from "./Index";
import AppContent from "../Components/AppContent";

const Home = ()  =>{
    const user = useContext(UserContext)
    console.log(user.currentUser);
    const navigate = useNavigate();
    const [cookies,setCookie, removeCookie] = useCookies([])
    useEffect(()=>{
        const verify = async()=>{
            if(!cookies.jwt){
                navigate("/login")
            }else{
                const { data } = await axios.get("http://localhost:6543/mickmaq/",{},{withCredentials:true})
                if(!data.status){
                    removeCookie("jwt");
                    navigate("/login")
                }else{
                    console.log(data);
                }
            }

        }
         verify();
    },[cookies,navigate,removeCookie])
    const logout = ()=>{
        removeCookie("jwt")
        navigate("/login")
    }
    return(
        <div>
            <Provider store={store}>
                <Sidebars/>
            
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeadder logout = {logout}/>
                <div className="body flex-grow-1 px-3">
                    {/* <startTransition> */}
                        <AppContent/>
                    {/* </startTransition> */}
                </div> 
            </div>
            </Provider>
        </div>
    )
}

export default Home