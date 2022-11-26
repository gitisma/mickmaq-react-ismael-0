import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Update } from '../Components/ContextUser'
import { UserContext } from "../Contexts/ContextUser";
// import ContextUser from "../Components/ContextUser";
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow
} from '@coreui/react';
import CIcon from "@coreui/icons-react";
import { cilLockLocked } from '@coreui/icons';
import axios from "axios";

let userData = {}

const Login = () =>{
        const emailRef = React.createRef();
        const pwdRef = React.createRef();
        const { currentUser, loginC } = useContext(UserContext)
        const [values, setValue] = useState({
            email:"",
            password:""
        })
        const  navigate  = useNavigate()

    const login = async()=>{
        const user = {
            email: emailRef.current.value,
            password: pwdRef.current.value
        }
        try{
            const { data } = await axios.post("http://localhost:6543/mickmaq/user/login",user, {withCredentials:true})
            if(data){
                if(data.emailError|| data.paswordError){
                    setValue({
                        email:data.emailError,
                        password: data.paswordError
                    })
                }
                else{
                  userData = data
                  // Update(data)
                  loginC(data)
                    navigate("/home")
                }
            }
        }catch(err){
            console.log(err);
        }
    }
        return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard color="dark" className="p-4 text-white">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-white-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput ref={emailRef} placeholder="email" autoComplete="email" />
                    </CInputGroup>
                    <p className="text-danger">{ values.email }</p>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput ref={pwdRef}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <p className="text-danger">{ values.password }</p>
                    <CRow>
                      <CCol xs={6}>
                        <CButton onClick={login} color="warning" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-warning py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Cliquer ici si vous n'avez pas de compte
                    </p>
                    <Link to="/register">
                      <CButton color="warning" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    )
    }
    


export default Login
export  { userData } 