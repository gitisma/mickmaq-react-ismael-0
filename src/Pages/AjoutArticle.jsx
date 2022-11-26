import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
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
    CRow,
    CFormSelect
} from '@coreui/react';
import axios from "axios";


const AjoutArticle = ()=>{
    const navigate = useNavigate()
    const nomRef = React.createRef()
    const nomRefS = React.createRef()
    const prixRef = React.createRef()
    const quantiteRef = React.createRef()
    const categorieRef = React.createRef()
    const categorieRefs = React.createRef()
    const [values, setValue] = useState({
        articles:{},
        categories:{},
        erreur:""
    })
    useEffect(()=>{
        const articles = async ()=>{
            const { data} = await axios.post('http://localhost:6543/mickmaq/user/afficheArticle',{},{withCredentials:true})
                
            const res = await axios.post("http://localhost:6543/mickmaq/user/affCat",{},{withCredentials:true})
            setValue({
                articles:[...data],
                categories:[...res.data]
            })
        }
        // const categories = async ()=>{
        //     const {data} = await axios.post("http://localhost:6543/mickmaq/user/affCat",{},{withCredentials:true})
            
        //     // console.log(categoriesM);
        // }
        articles()
    })

    const handleClick = async()=>{
        if((nomRef.current.value.length === 0 && nomRefS.current.value===0) || prixRef.current.value.length === 0 || (categorieRef.current.value.length === 0 && categorieRefs.current.value===0) || quantiteRef.current.value.length === 0){
            console.log("erreu1");
            // setValue({
            //     erreur: "remplissez tous les champs"
            // })
        }
        if((nomRef.current.value.length!==0 && nomRefS.current.value.length !==0) || (categorieRef.current.value.length!==0 && categorieRefs.current.value.length !==0)){
            console.log("erreu2");
            // setValue({
            //     erreur:"vous ne pouvez pas choisir un article (une catégorie) et entrer un article ( une catégorie)"
            // })
        }
        else{
             const article ={
                libele:"",
                quantite: parseInt(quantiteRef.current.value),
                prix: parseInt(prixRef.current.value),
                categorie: ""
             }
             if(nomRef.current.value){
                article.libele = nomRef.current.value
             }
             else{
                article.libele = nomRefS.current.value
             }
             if(categorieRef.current.value){
                article.categorie = categorieRef.current.value
             }
             else{
                article.categorie = categorieRefs.current.value
             }
             const {data} = await axios.post('http://localhost:6543/mickmaq/user/ajouterArticle',{article},{withCredentials:true})
             console.log(data);
             if(!data.erreur){
                 navigate('/articles')
             }
             else{
                console.log(data.erreur);
             }
        }
    }

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Ajouter un article</h1>
                  <p>{ values.erreur }</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                    </CInputGroupText>
                    <CFormInput ref={nomRef}  placeholder="nouveau produit" autoComplete="username" />
                    <CFormSelect ref={nomRefS}  aria-label="Default select example">
                        <option value="">sélectionné le produit</option>
                        { values.articles[0] ? (
                            values.articles.map((article,)=>{
                                return <option key={article._id} value={article.libele}>{ article.libele }</option>
                            })
                        ):("") }
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput ref={ prixRef } type="number"  placeholder="prix" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput ref={ quantiteRef } type="number" placeholder="quantité" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput ref={ categorieRef } placeholder=" ajouter la catégorie" autoComplete="email" />
                    <CFormSelect ref={ categorieRefs } aria-label="Default select example">
                        <option value="">sélectionné la catégorie</option>
                        {values.categories[0]? (
                            values.categories.map((categorie)=>{
                                return <option key={categorie._id} value={categorie.libele}>{categorie.libele}</option>
                            })
                        ):("")}
                    </CFormSelect>
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton onClick={handleClick} color="success">Ajouter</CButton>
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

export default AjoutArticle