import React from 'react';
import Header from './components/screen/Header'
import './App.css';
import Navbar from './components/screen/Navbar';
import Footer from './components/screen/Footer';
import DisplayArticles from './components/screen/DisplayArticles';

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <div className="app_container">
    //     <Header/>
    //     <Footer />
    //   </div>
    // </div>
    <div>
      <DisplayArticles />
    </div>
  );
}

export default App;
