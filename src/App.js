import React, {useState} from 'react';
import Header from './components/screen/Header'
import './App.css';
import Navbar from './components/screen/Navbar';
import Footer from './components/screen/Footer';
import DisplayArticles from './components/screen/DisplayArticles';
import ArticleContent from './components/screen/ArticleContent';
import ListInitiatives from './components/screen/ListInitiatives';
import GetHeaderHeight from './components/screen/GetHeaderHeight'

function App() {
  const [headerHeight, setHeaderHeight] = useState(0)

  const setRealHeaderHeight = (height) => {
    console.log(height);
    
    setHeaderHeight({ headerHeight: height })
  }
  
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="app_container">
        {/* <Header /> */}
        <GetHeaderHeight props={setRealHeaderHeight} />
        {/* <DisplayArticles /> */}
        <ArticleContent height={headerHeight} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
