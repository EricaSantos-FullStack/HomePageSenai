import React from 'react';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="pag-principal"> <HomePage /> </div>
      <Footer />
    </div>
  );
}

export default App;
