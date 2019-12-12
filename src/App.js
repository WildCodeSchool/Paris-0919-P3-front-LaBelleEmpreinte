import React from 'react';
import Header from './components/screen/Header'
import './App.css';
import Navbar from './components/screen/Navbar';
import Footer from './components/screen/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app_container">
        <Header/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
