import { configureStore } from "@reduxjs/toolkit";
import offerReducer from './features/newOffers';
import userReducer from './features/user';
import ownerReducer from './features/owners';

export const store = configureStore(
    {
        reducer: { 
            offer: offerReducer,
            currentUser: userReducer,
            currentOwner: ownerReducer,
        },
    }
)