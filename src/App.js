import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NAVBAR from './components/navbar';
import Coin from './components/coin';
import Coindetail from './components/coinDetail';

function App() {
  return (
    <>
      <NAVBAR />

      <Routes>
        <Route path="/" element={<Coin />} />
        <Route path="/id" element={<Coindetail />} />
      </Routes>

    </>
  );
}

export default App;
