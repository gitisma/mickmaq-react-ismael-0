import React from 'react';
import './styles/styles.scss'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProviderArticle from './Contexts/ProviderArtcles';
// import Home from './Pages/Home';

const Home = React.lazy(()=> import('./Pages/Home'))

function App() {
  return (
    <div className="App">
      {/* <ContextUser> */}
      <ProviderArticle>
        <BrowserRouter>
        
          <Routes>
            <Route exact path="/login" name="login-page" element={<Login/>}/>
            <Route exact path="/register" name="register-page" element={<Register/>}/>
            {/* <Route exact path="/articles" name="register-page" element={<ShowArticles/>}/> */}
            <Route path="*" name="Home" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
        </ProviderArticle>
        {/* </ContextUser> */}
        
    </div>
  );
}

export default App;
