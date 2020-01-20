
import React, {useState} from 'react';
import Header from './components/screen/Header';
import './App.css';
import Navbar from './components/screen/Navbar';
import Footer from './components/screen/Footer';
import Filtres from './components/userInterface/Filtres';

const App = () => {
  const [headerHeight, setHeaderHeight] = useState(0)

  const setRealHeaderHeight = (height) => {
    
    setHeaderHeight({ headerHeight: height })
  }
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="app_container">
 
      <Header/>
      <div className="categorie">
      <Filtres />
      
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
