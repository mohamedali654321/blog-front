  
import React , {useState} from 'react'
import './App.css';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer'
import Hero from './Components/Hero';
import Newsletter from './Components/Newsletter';
import MainPage from './Components/MainPage';
import Details from './Components/Details';




function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/blog/:slug" exact component={Details}/>
      </Switch>
      
     
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
