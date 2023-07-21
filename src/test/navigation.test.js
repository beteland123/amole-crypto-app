import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Coin from '../components/coin';
import CoinDetail from '../components/coinDetail';
import '@testing-library/jest-dom';

const mockStore = configureStore([thunk]);

test('renders Coin component when navigating to "/" route', () => {
  const mockCoins = {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '29926.533690045835',
    volume: 33553053694.82069,
    marketCap: 581583816449.8502,
    availableSupply: 19433718,
    totalSupply: 21000000,
    priceChange1h: -0.28,
    priceChange1d: 0.39,
    priceChange1w: -2.56,
    websiteUrl: 'http://www.bitcoin.org',
    img: 'bitcoin.png',
  };

  const mockCoins2 = {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: '29926.533690045835',
    volume: 33553053694.82069,
    marketCap: 581583816449.8502,
    availableSupply: 19433718,
    totalSupply: 21000000,
    priceChange1h: -0.28,
    priceChange1d: 0.39,
    priceChange1w: -2.56,
    websiteUrl: 'http://www.bitcoin.org',
    img: 'bitcoin.png',
  };

  const store = mockStore({
    coins: {
      coins: [mockCoins, mockCoins2],
    },
  });

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Coin />} />
          <Route path="/coin/:id" element={<CoinDetail />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  const coinComponent = screen.getByTestId('coin-component');
  expect(coinComponent).toBeInTheDocument();
});

test('renders CoinDetail component when navigating to "/coin/:id" route', () => {
  const mockCoins = {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '29926.533690045835',
    volume: 33553053694.82069,
    marketCap: 581583816449.8502,
    availableSupply: 19433718,
    totalSupply: 21000000,
    priceChange1h: -0.28,
    priceChange1d: 0.39,
    priceChange1w: -2.56,
    websiteUrl: 'http://www.bitcoin.org',
    img: 'bitcoin.png',
  };

  const mockCoins2 = {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: '29926.533690045835',
    volume: 33553053694.82069,
    marketCap: 581583816449.8502,
    availableSupply: 19433718,
    totalSupply: 21000000,
    priceChange1h: -0.28,
    priceChange1d: 0.39,
    priceChange1w: -2.56,
    websiteUrl: 'http://www.bitcoin.org',
    img: 'bitcoin.png',
  };

  const store = mockStore({
    coins: {
      coins: [mockCoins, mockCoins2],
    },
  });

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/coin/bitcoin']}>
        <Routes>
          <Route path="/" element={<Coin />} />
          <Route path="/coin/:id" element={<CoinDetail />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  const coinDetailComponent = screen.getByTestId('coin-detail-component');
  expect(coinDetailComponent).toBeInTheDocument();
});
