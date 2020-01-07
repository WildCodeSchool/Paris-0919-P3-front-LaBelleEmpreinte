import React from 'react';
import Header from './components/screen/Header'
import './App.css';
import Navbar from './components/screen/Navbar';
import Footer from './components/screen/Footer';
import DisplayArticles from './components/screen/DisplayArticles';

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Header/>
        <DisplayArticles />
        <Footer />
      </div>
    </div>
  );
}

export default App;
