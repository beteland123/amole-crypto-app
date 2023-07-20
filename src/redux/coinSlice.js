import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coinstats.app/public/v1/coins';
const initialState = {
  coins: [],
  isloading: false,
  error: '',
};

export const fetchcoins = createAsyncThunk('coins/fetchcoins', async () => {
  try {
    const response = await fetch(url);
    const coins = await response.json();
    return coins.coins;
  } catch (error) {
    throw new Error('Failed to fetch coins');
  }
});

const coinSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchcoins.pending, (state) => {
      state.isloading = true;
      state.error = '';
    });
    builder.addCase(fetchcoins.fulfilled, (state, action) => {
      state.isloading = false;
      action.payload.forEach((coin) => {
        const newCoin = {
          id: coin.id,
          name: coin.name,
          img: coin.icon,
          symbol: coin.symbol,
          price: coin.price,
          volume: coin.volume,
          marketCap: coin.marketCap,
          availableSupply: coin.availableSupply,
          totalSupply: coin.totalSupply,
          priceChange1h: coin.priceChange1h,
          priceChange1d: coin.priceChange1d,
          priceChange1w: coin.priceChange1w,
          websiteUrl: coin.websiteUrl,
        };
        state.coins.push(newCoin);
      });
    });
    builder.addCase(fetchcoins.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    });
  },
});

export const getCoins = (state) => state.coins.coins;
export const getLoading = (state) => state.coins.isloading;
export const getError = (state) => state.coins.error;

export default coinSlice.reducer;
