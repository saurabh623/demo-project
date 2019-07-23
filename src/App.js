import React from 'react';
import Header from './CommonComponent/Header';
import './App.css';
import Footer from './CommonComponent/Footer';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
       <Header/>
       <Home/>
      <Footer/>
    </div>
  );
}

export default App;
