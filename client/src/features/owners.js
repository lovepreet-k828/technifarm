import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    owner: {
      'name' : 'Lovepreet Kumar',
      'country' : 'India',
      'state' : 'Punjab',
      'cityVillage' : 'Jalandhar',
      'mobileNo' : '77100333844',
      'streetName': '1001, model house',
      'experience':'5'
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