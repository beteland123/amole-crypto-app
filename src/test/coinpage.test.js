import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Coin from '../components/coin';
import '@testing-library/jest-dom';

describe('Coin', () => {
  const mockStore = configureStore([thunk]);
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
    const store = mockStore({
      coins: {
        coins: [mockCoins, mockCoins2],
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
  it('should filter the coins based on the search input', () => {
    // ...
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

    const { getByText, getByPlaceholderText, queryByText } = render(
      <Provider store={store}>
        <Router>
          <Coin />
        </Router>
      </Provider>,
    );

    // Check that both coins are initially rendered
    expect(getByText('Bitcoin')).toBeInTheDocument();
    expect(getByText('Ethereum')).toBeInTheDocument();

    // Simulate typing 'Bitcoin' in the search field
    fireEvent.change(getByPlaceholderText('Search by name...'), { target: { value: 'Bitcoin' } });

    // Check that only 'Bitcoin' is rendered and 'Ethereum' is not
    expect(getByText('Bitcoin')).toBeInTheDocument();
    expect(queryByText('Ethereum')).toBeNull();
  });
});
