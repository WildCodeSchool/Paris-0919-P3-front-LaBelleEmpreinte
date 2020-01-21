import React, { useState } from 'react';
import Header from './components/screen/Header';

import './App.css';
import GetHeaderHeight from './components/screen/GetHeaderHeight'
import Navbar from './components/screen/Navbar';
import Footer from './components/screen/Footer';
import DisplayArticles from './components/screen/DisplayArticles';
import ArticleContent from './components/screen/ArticleContent';
import AdminHomeContainer from './store/containers/AdminHomeContainer';
import AdminCreateArticle from './components/adminInterface/AdminCreateArticle'
import ListInitiatives from './components/screen/ListInitiatives';
import Filtres from './components/userInterface/Filtres'
import TitleAdmin from './components/adminInterface/TitleAdmin';

import { Route, Switch } from 'react-router-dom'

const App = () => {
  
  const [headerHeight, setHeaderHeight] = useState(0)

  const setRealHeaderHeight = (height) => {
    setHeaderHeight({ headerHeight: height })
  }

  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="app_container">
      </div>
      {/* <AdminHomeContainer /> */}
      <GetHeaderHeight props={setRealHeaderHeight} />
      <Switch>
        <Route exact path="/">
          <div className="categorie">
            <Filtres />
          </div>
        </Route>
        <Route path="/article/:id" render={(props) => <ArticleContent {...props} height={headerHeight} />} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
