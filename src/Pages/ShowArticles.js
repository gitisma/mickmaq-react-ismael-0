import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import axios from "axios";
import DetailArticle from "./DetailArticles";
import { CButton, CFormInput } from '@coreui/react'
import {ArticleConext} from "../Contexts/ArticlesContext.jsx"
import '../styles/articles.css'

const ShowArticles  =()=>{
    // let articles = {};
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         articles:{}
    //     }
    // }
    //  categorie = async(idCat)=>{

    //     let cat = await axios.post('http://localhost:6543/mickmaq/user/affCat',{idCat:idCat},{withCredentials:true})
    //     console.log(cat);
    // }
    const nbreArtRef = React.createRef()
    const { article, getArticle } = useContext(ArticleConext)
    const [value, setValue] = useState({
        articles:{}
    })
    useEffect(()=>{
        async function fetchData(){
               const { data } = await axios.post("http://localhost:6543/mickmaq/user/afficheArticle",{}, {withCredentials:true})
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                
                let res= await axios.post('http://localhost:6543/mickmaq/user/affCat',{idCat:data[key].idCat},{withCredentials:true})
                let user  = await axios.post('http://localhost:6543/mickmaq/user/affuser',{idUser:data[key].idUser},{ withCredentials:true })
                data[key].idCat = res.data.libele
                
                 data[key].idUser = user.data.nom+" "+" "+user.data.prenom
                // console.log(element);
                
            }
        }
        setValue({
            articles : [...data]
        })
        }
        fetchData()
         
    })
    // async componentDidMount(){
    //   const { data } = await axios.post("http://localhost:6543/mickmaq/user/afficheArticle",{}, {withCredentials:true})
    //   for (const key in data) {
    //     if (Object.hasOwnProperty.call(data, key)) {
            
    //         let res= await axios.post('http://localhost:6543/mickmaq/user/affCat',{idCat:data[key].idCat},{withCredentials:true})
    //         data[key].idCat = res.data.libele
    //         const element = await data[key];
    //         // console.log(element);
            
    //     }
    //   }
    //     this.setState({
    //         articles : [...data]
    //     }) 
    //     // console.log(data);       
    // }
        return(
        <table className="tableau-style">
            {/* {this.state.articles[0]? console.log(this.state.articles[0].libele): console.log('bon')} */}
            <thead>
                <tr>
                    <th>articles</th>
                    <th>quantite</th>
                    <th>categorie</th>
                    <th>prix</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { value.articles[0]? (value.articles.map((article, )=>{
                    return(
                    <tr key={article._id}>
                        {/* { article.categorie = this.categorie(article._id) } */}
                        <td>{article.libele}</td>
                        <td>{article.quantite}</td>
                        <td>{article.idCat}</td>
                        <td>{article.prix}</td>
                        <td><CButton color="danger" onClick={async()=>{
                            console.log(article._id);
                        }} >supprimer</CButton></td>
                        <td><Link to="/article"><CButton color="success" onClick={()=>{
                            getArticle(article)
                        }}>détail</CButton></Link></td>
                        <td>
                            <CFormInput ref={nbreArtRef} type="number"  placeholder="nombre d'article retiré" autoComplete="number"/>
                            <CButton color="secondary" onClick={(e)=>{
                                console.log(article._id);
                                // const remove = await axios.post('http://localhost:6543/mickmaq/user/removeArt',{idArt:article._id, nbreArt:Number(nbreArtRef.current.value)},{withCredentials:true})
                            }} >retirer</CButton>
                        
                        </td>
                    </tr>)
                })):(
                    <tr>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    </tr>
                /* </tr>
                <tr>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                </tr>
                <tr>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                </tr>
                <tr>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                </tr>
                <tr>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                    <td>Contenu</td>
                </tr> */
                )}
                
            </tbody>
        </table>
    )
    
    
}

export default ShowArticles