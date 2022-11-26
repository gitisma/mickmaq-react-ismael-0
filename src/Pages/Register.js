import React, { useState } from "react"
import { useNavigate } from "react-router-dom"; 

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow
} from '@coreui/react';
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from '@coreui/icons';
import axios from "axios";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;


const Register  =()=>{
        const emailRef = React.createRef()
        const nomRef = React.createRef()
        const prenomRef = React.createRef()
        const pwdRef = React.createRef()
        const cfPwdRef = React.createRef()
        const  navigate  = useNavigate()
        const [values, setValue] = useState({
            nom:"",
            prenom:"",
            email:"",
            password:""
        })
    
    const handleClick = async () =>{
        if(nomRef.current.value.length<3 ){
            setValue({
                nom:"votre nom doit contenir au moins 3 caractères" 
            })
        }
        else if(prenomRef.current.value.length<3 ){
            setValue({
                prenom:"votre prenom doit contenir au moins 3 caractères" 
            })
        }
        else if(!EMAIL_REGEX.test(emailRef.current.value)){
            setValue({
                email:"verifier votre email"
            })
        }
        else if(!PASSWORD_REGEX.test(pwdRef.current.value)){
            setValue({
                password:"verifer votre password"
            }) 
        }
        else if(pwdRef.current.value !== cfPwdRef.current.value ){
            setValue({
                password:"vos mots de passe ne correspondent pas"
            }) 
        }
        else {
            const user = {
                nom: nomRef.current.value,
                prenom: prenomRef.current.value,
                email: emailRef.current.value,
                password: pwdRef.current.value
            }
            const { data } = await axios.post("http://localhost:6543/mickmaq/user/register", user,{withCredentials:true})
            if(data){
                if(data.erreur){
                    setValue({
                        email: data.erreur
                    })
                }else{
                    navigate("/")
                }
            }
        }
    }
        return(
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput ref={nomRef} placeholder="nom" autoComplete="username" />
                  </CInputGroup>
                  <p className="text-danger">{ values.nom }</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput ref={prenomRef} placeholder="prenom" autoComplete="username" />
                  </CInputGroup>
                  <p className="text-danger">{ values.prenom }</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput ref={ emailRef } placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                  <p className="text-danger">{ values.email }</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput ref={pwdRef}
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <p className="text-danger">{ values.password }</p>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput ref={ cfPwdRef }
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <p className="text-danger">{ values.password }</p>
                  <div className="d-grid">
                    <CButton onClick={handleClick} color="success">Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    )
    
    
}

export default Register