import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchcoins } from '../redux/coinSlice';

const mockStore = configureStore([thunk]);

describe('coinSlice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      coins: [],
      isloading: false,
      error: '',
    });
  });

  it('should fetch coins correctly and update the state', async () => {
    const mockResponse = {
      coins: [
        {
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
        },
      ],
    };

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    await store.dispatch(fetchcoins());

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchcoins.pending.type);
    expect(actions[1].type).toEqual(fetchcoins.fulfilled.type);
    expect(actions[1].payload).toEqual(mockResponse.coins);
  });

  it('should handle pending state when no data is returend yet', async () => {
    const mockResponse = {
      coins: [{}],
    };

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    await store.dispatch(fetchcoins());

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchcoins.pending.type);
    expect(actions[0].payload).toBeUndefined();
  });

  it('should handle error on failed response', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    });

    await store.dispatch(fetchcoins());

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchcoins.pending.type);
    expect(actions[1].type).toEqual(fetchcoins.rejected.type);
    expect(actions[1].error.message).toEqual('Failed to fetch coins');
  });
});
