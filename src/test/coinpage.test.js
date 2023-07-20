import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    MemoryRouter, Routes, Route,
  } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Coin from '../components/coin';
import '@testing-library/jest-dom';

describe('Coin', () => {
  it('should render the coin correctly', () => {
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
    const mockStore = configureStore([thunk]);
    const store = mockStore({
      coins: {
        coins: [mockCoins,mockCoins2],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Coin />
        </Router>
      </Provider>,
    );

    expect(getByText('Bitcoin')).toBeInTheDocument();
    expect(getByText('Ethereum')).toBeInTheDocument();

  });
});
    
  
