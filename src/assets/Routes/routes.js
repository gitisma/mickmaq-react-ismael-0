import React from "react";
const Home = React.lazy(()=> import("../../Pages/Home"))
const Register = React.lazy(()=> import("../../Pages/Register"))
const Login = React.lazy(()=>import("../../Pages/Login"))
const ShowArticles = React.lazy(()=> import("../../Pages/ShowArticles"))
const DetailArticle = React.lazy(()=> import('../../Pages/DetailArticles'))
const AjoutArticle = React.lazy(()=> import('../../Pages/AjoutArticle'))

const routes = [
    { path:"/", exact:true, name:'Home' },
    { path:"/home", name:'Home', element: Home },
    { path:"/login", name:'Login', element: Login },
    { path:"/register", name:'Register', element: Register },
    { path:"/articles", name:'Articles', element: ShowArticles },
    { path:"/article", name:'Article', element: DetailArticle },
    { path:"/ajoutArticle", name:'AjoutArticle', element: AjoutArticle },
]


export default routes