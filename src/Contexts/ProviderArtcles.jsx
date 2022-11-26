import React, { useState } from "react";
import ArticleConext from "./ArticlesContext.jsx";

const ProviderArticle = ({children})=>{
    const [article, setArticle] = useState()

    const getArticle=(data)=>{
        setArticle(data)
    }
    const valueContext = {
        article:article,
        getArticle:getArticle
    }

    return(
        <ArticleConext.Provider value={valueContext}>
            {children}
        </ArticleConext.Provider>
    )
}

export default ProviderArticle