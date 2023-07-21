import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useParams } from 'react-router-dom';
import CoinDetail from '../components/coinDetail';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

describe('CoinDetail', () => {
  it('should render the matching coin details correctly', () => {
    const mockCoins = {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 29926.533690045835,
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

    const mockStore = configureStore([]);
    const store = mockStore({
      coins: {
        coins: [mockCoins],
      },
    });

    useParams.mockReturnValue({ id: 'bitcoin' });

    const { getByText } = render(
      <Provider store={store}>
        <CoinDetail />
      </Provider>,
    );

    expect(getByText('Bitcoin')).toBeInTheDocument();
    expect(getByText('BTC')).toBeInTheDocument();
    expect(getByText(new RegExp('^\\$29926.533690045835$'))).toBeInTheDocument();
    expect(getByText(new RegExp('^\\$33553053694.82069$'))).toBeInTheDocument();
    expect(getByText(new RegExp('^\\$581583816449.8502$'))).toBeInTheDocument();
    expect(getByText(new RegExp('^\\$19433718$'))).toBeInTheDocument();
    expect(getByText(new RegExp('^\\$21000000$'))).toBeInTheDocument();
    expect(getByText(new RegExp('^\\$-0.28$'))).toBeInTheDocument();
    expect(getByText(new RegExp('^\\$0.39$'))).toBeInTheDocument();
    expect(getByText(new RegExp('^\\$-2.56$'))).toBeInTheDocument();

    expect(getByText('http://www.bitcoin.org')).toBeInTheDocument();
  });
});
