import './App.css';
import React from 'react'
import Header from './component/Header';
import Nav from './component/Nav';
import Main from './component/Main';
import Footer from './component/Footer';


const App = () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>

      <Main />
      <Footer />

    </>
  )
}

export default App


