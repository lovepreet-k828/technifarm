import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
      'name' : 'Lovepreet Kumar',
      'country' : 'India',
      'state' : 'Punjab',
      'cityVillage' : 'Jalandhar',
      'mobileNo' : '77100333844',
      'streetName': '1001, model house',
      'experience':'5'
    },
  };
  
  const userSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
       signIn: (state, action) => {
       state.user = action.payload;

      },
    },
  });
  
  export const { signIn } = userSlice.actions;
  
  export default userSlice.reducer;