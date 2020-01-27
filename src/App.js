
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import GetHeaderHeight from './components/screen/GetHeaderHeight'
import Navbar from './components/screen/Navbar';
import Footer from './components/screen/Footer';

import ArticleContent from './components/screen/ArticleContent';
import AdminHomeContainer from './store/containers/AdminHomeContainer';
import ListInitiatives from './components/screen/ListInitiatives';
import Filtres from './components/userInterface/Filtres'
import TitleAdmin from './components/adminInterface/TitleAdmin';
import AdminCreateArticle from './components/adminInterface/AdminCreateArticle';
import DisplayArticleAdmin from './components/adminInterface/DisplayArticleAdmin';

import Home from './components/adminInterface/Home'

const App = () => {

  const [headerHeight, setHeaderHeight] = useState(0)

  const setRealHeaderHeight = (height) => {
    setHeaderHeight({ headerHeight: height })
  }

  return (
    <div className="App">
      <div className="App-navbar">
        <Navbar />
      </div>
      <Switch>
        <div className="page_content">
          <Route exact path="/" >
            <div className="app_container">
              <GetHeaderHeight props={setRealHeaderHeight} />
              <div>
                <Filtres front="user" />
              </div>
              <Footer />
            </div>
          </Route>
          <Route path="/article/:id" render={(props) => <ArticleContent {...props} height={headerHeight} />} />
        </div>
        <Route path="/admin">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}
export default App
