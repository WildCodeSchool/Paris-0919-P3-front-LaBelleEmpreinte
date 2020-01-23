
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
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
import Home from './components/adminInterface/Home'

const App = () => {

  const [headerHeight, setHeaderHeight] = useState(0)

  const setRealHeaderHeight = (height) => {
    setHeaderHeight({ headerHeight: height })
  }

  return (

    <div className="App">
      <Switch>
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
        <Route path="/admin">
          <Home />
        </Route>
      </Switch>
      </div>
      )
    }
      export default App
