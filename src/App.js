import React from 'react';
// import { lazy } from 'react';

//styles
import './App.css';

//components
import Navbar from './components/navbar'
import Footer from './components/footer'
import WebPage from './pages/page'

// const WebPage = lazy(()=>import('./pages/page'))

function App() {
  return (
    <div>
      <Navbar/>
      <WebPage/>
      <Footer/>
    </div>
  )
}

export default App