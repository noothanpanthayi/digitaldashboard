import { createSlice } from '@reduxjs/toolkit'

export const cartListSlice = createSlice({
  name: 'cartList',
  initialState: {
    cartlist: []
  },
  reducers: {
    setCartList: (state, action) => {

      // state.cartList=[...state.cartList,action.payload]
      // console.log('payload ', action.payload);
      
      state.cartlist.push(action.payload)
      // console.log('state.cartlist ', state.cartList)

    },
  },
})

export const {setCartList}=cartListSlice.actions;