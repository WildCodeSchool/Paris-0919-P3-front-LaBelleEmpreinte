import React from 'react';
// import Header from './components/screen/Header'
import './App.css';
// import Navbar from './components/screen/Navbar';
// import Footer from './components/screen/Footer';
// import DisplayArticles from './components/screen/DisplayArticles';
// import ArticleContent from './components/screen/ArticleContent';
// import AdminHomeContainer from './store/containers/AdminHomeContainer';
// import AdminCreateArticle from './components/adminInterface/AdminCreateArticle'
// import ListInitiatives from './components/screen/ListInitiatives';
import TitleAdmin from './components/adminInterface/TitleAdmin';
import AdminCreateArticle from './components/adminInterface/AdminCreateArticle';
import DisplayArticleAdmin from './components/adminInterface/DisplayArticle';






const App = () => {
  return (
    <div>
        {/* <TitleAdmin/>  */}
        <DisplayArticleAdmin/>
        {/* <AdminCreateArticle/> */}
    </div>   
  );
}

export default App;
