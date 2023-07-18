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
    return error.message;
  }
});
const coinSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchcoins.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(fetchcoins.fulfilled, (state, action) => {
      state.isloading = false;
      action.payload.forEach((coin) => {
        const newCoin = {
          id: coin.id,
          name: coin.name,
          img: coin.icon,
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
