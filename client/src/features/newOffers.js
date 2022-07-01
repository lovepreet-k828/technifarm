import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newOffer: ['artichoke', 'arugula', 'asparagus',],
};

const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    addOffer: (state, action) => {
      state.newOffer.push(action.payload);
    },
  },
});

export const { addOffer } = offerSlice.actions;

export default offerSlice.reducer;