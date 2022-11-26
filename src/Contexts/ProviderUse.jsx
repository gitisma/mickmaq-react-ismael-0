import React, { useState } from 'react'
import  UserContext  from './ContextUser' 
const UserProvider = ({ children })=>{
    const [currentUser, setCurrentUser] = useState()
    const login = (data) =>{
        setCurrentUser(data)
    }
    const contextValue = {
        currentUser:currentUser,
        loginC:login
    }
    return(
        <UserContext.Provider value = {contextValue}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider