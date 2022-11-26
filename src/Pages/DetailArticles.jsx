import React, { useContext } from "react";
import {ArticleConext} from "../Contexts/ArticlesContext.jsx"
import { 
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardGroup,
    CCardHeader,
    CCardImage,
    CCardLink,
    CCardSubtitle,
    CCardText,
    CCardTitle,
    CListGroup,
    CListGroupItem,
    CNav,
    CNavItem,
    CNavLink,
    CCol,
    CRow
 } from '@coreui/react'

 import avatar from '../assets/images/mickmaq.jpg'

const DetailArticle = (props) =>{
    const article = useContext(ArticleConext)
    console.log(article.article);
    return(
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Article</strong> :<small>détail sur article</small>
                    </CCardHeader>
                    <CCardBody className="d-flex d-md-flex me-auto">
                        <CCard style={{ width:'100%' }}>
                            <CCardGroup>
                                <CCard>
                                     <CCardImage orientation="top"  src={avatar}/>
                                </CCard>
                                <CCard>
                                        <CCardBody>
                                            <CListGroup flush>
                                                <CCardTitle>{ article.article.libele }</CCardTitle>
                                            {/* <CCardText>dsfjdndmofndzmfodsmf</CCardText> */}
                                                <CListGroupItem><strong>prix</strong>: { article.article.prix }</CListGroupItem>
                                                <CListGroupItem><strong>quantite</strong>: { article.article.quantite }</CListGroupItem>
                                                <CListGroupItem><strong>categorie</strong>: { article.article.idCat }</CListGroupItem>
                                                <CListGroupItem><strong>ajouter par</strong>: { article.article.idUser }</CListGroupItem>
                                                <CListGroupItem><strong>ajouter le</strong>: { article.article.jour }</CListGroupItem>
                                                <CListGroupItem><strong>ajouter à</strong>: { article.article.heure }</CListGroupItem>
                                            </CListGroup>
                                    </CCardBody>
                                </CCard>
                            </CCardGroup>
                            
                        </CCard>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default DetailArticle