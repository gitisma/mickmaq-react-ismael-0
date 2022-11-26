import React from 'react'
export const UserContext = React.createContext({
  currentUser:{},
  loginC:(data)=>{}
})


// const UserProvider =({children})=>{
//   return (
//     <UserContext.Provider value = {""}>
//       {children}
//     </UserContext.provider>
//   )
// }
// const { userData } = require('../Pages/Login')
export default UserContext

