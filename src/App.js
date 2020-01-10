import React from 'react';
import Header from './components/screen/Header'
import './App.css';
import Navbar from './components/screen/Navbar';
import Footer from './components/screen/Footer';
import DisplayArticles from './components/screen/DisplayArticles';
import ArticleContent from './components/screen/ArticleContent';
import AdminHome from './components/adminInterface/AdminHome';

function App() {
  return (
    <div>
      {/* <ArticleContent /> */}
      {/* <DisplayArticles /> */}
      <div className="App">
        <Navbar />
        <div className="app_container">
          <Header />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
