import {configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartListSlice } from '../slices/cartlist';


export const store=configureStore({
    reducer:{
        cartlist:cartListSlice.reducer
    }
})

setupListeners(store.dispatch);