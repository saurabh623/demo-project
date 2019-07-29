import React from 'react';
import Header from './CommonComponent/Header';
import './App.css';
import Footer from './CommonComponent/Footer';
import Details from './Pages/Details';
import Description from './Pages/Description';
import Reviews from './Pages/Reviews';
import CustomTab from './Pages/CustomTab';
import Product from './Pages/Product';

function App() {
  return (
    <div className="App">
       <Header/>
       <Details/>
       <Description/>
       <Reviews/>
       <CustomTab/>
       <Product/>
      <Footer/>
    </div>
  );
}

export default App;
