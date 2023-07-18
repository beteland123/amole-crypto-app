import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NAVBAR from './components/navbar';
import Coin from './components/coin';
import CoinDetail from './components/coinDetail';

function App() {
  return (
    <>
      <NAVBAR />

      <Routes>
        <Route path="/" element={<Coin />} />
        <Route path="/coin/:id" element={<CoinDetail />} />
      </Routes>
    </>
  );
}

export default App;
