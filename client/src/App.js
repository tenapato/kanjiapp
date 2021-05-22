import React, { useState, useEffect, useRef } from 'react';
//import FlashcardList from './FlashcardList';
//import './App.css'
//import axios from 'axios'
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';  //Dependencies to make app multi-page

import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';


const App = () => (
    <BrowserRouter>
      <Container maxWidth ="100%">
      <Navbar/>
      <Switch>
        <Route path = "/" exact component = {Home} />
        <Route path = "/auth" exact component = {Auth}/>
      </Switch>
    </Container>
    </BrowserRouter>
    
    



);



export default App;