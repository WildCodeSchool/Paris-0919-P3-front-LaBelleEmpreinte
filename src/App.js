import React from 'react';
import Header from './components/screen/Header';
import './App.css';
import Navbar from './components/screen/Navbar';
import Footer from './components/screen/Footer';
import Besoins from './components/userInterface/Besoins';
import Objets from './components/userInterface/Objets';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app_container">
      <Besoins/>
      <Objets />
      <Header/>
      <Footer />
      </div>
    </div>
  );
}

export default App;
