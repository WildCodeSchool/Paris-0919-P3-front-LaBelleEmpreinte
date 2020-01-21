
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Footer from './components/screen/Footer';
import GetHeaderHeight from './components/screen/GetHeaderHeight';
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
        <Route exact path="/">
          <div className="app_container">
            <GetHeaderHeight props={setRealHeaderHeight} />
            <div className="categorie">
              <Filtres />
            </div>
            <Footer />
          </div>
        </Route>
        <Route path="/admin">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
