import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  owner: {
    'name': 'Lovepreet Kumar',
    'country': 'India',
    'state': 'Punjab',
    'cityVillage': 'Jalandhar',
    'mobileCode' : '91',
    'mobileNo': '7710467366',
    'streetName': '1001, model house',
    'experience': '5 years'
  },
};

const ownerSlice = createSlice({
  name: 'currentOwner',
  initialState,
  reducers: {
    getOwner: (state, action) => {
      state.owner = action.payload;

    },
  },
});

export const { getOwner } = ownerSlice.actions;

export default ownerSlice.reducer;