import React from 'react';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './Header/Header.jsx'
import Homepage from './PagesComponents/Homepage/Homepage'
import Portfolio from './PagesComponents/Portfolio/Portfolio'
import Skills from './PagesComponents/Skills/Skills'
import Footer from './Footer/Footer.jsx'

const StyledDiv = styled.div`
    height:100vh;
    display: flex;
    flex-direction: column;
`
function App() {
  return (
    <Router>
      <StyledDiv>
        <Header />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/Skills' component={Skills} />
        <Route exact path='/Portfolio' component={Portfolio} />
        <Footer />
      </StyledDiv>
    </Router>


  );
}

export default App;
