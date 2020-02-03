
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import GetHeaderHeight from './components/screen/GetHeaderHeight'
import Navbar from './components/screen/Navbar';
import Footer from './components/screen/Footer';

import ArticleContent from './components/screen/ArticleContent';
import Filtres from './components/userInterface/Filtres';
import Home from './components/adminInterface/Home'

const App = () => {

  const [headerHeight, setHeaderHeight] = useState(0)

  const setRealHeaderHeight = (height) => {
    setHeaderHeight({ headerHeight: height })
  }

  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/recherche" >
          <div className="App-navbar">
            <Navbar />
          </div>
          <div className="page_content">
            <div className="app_container">
              <GetHeaderHeight props={setRealHeaderHeight} />
              <div>
                <Filtres front="user" />
              </div>
              <Footer />
            </div>
          </div>
        </Route>
        <Route path="/article/:id" render={(props) =>
        <>
          <div className="App-navbar">
            <Navbar />
          </div>
          <div className="page_content">
            <div className="app_container">
              <GetHeaderHeight props={setRealHeaderHeight} />
              <div>
                <ArticleContent {...props} height={headerHeight} />          </div>
              <Footer />

            </div>
          </div>
          </> } />
        <Route path="/admin">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}
export default App
