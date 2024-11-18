import {  createSlice } from '@reduxjs/toolkit'

const initialState = {
 name:"Name is  Fawzy",
}

 
export const counterSlice = createSlice({
  name: 'counter',
  initialState,


  // ALL FANCION Here
  reducers: {

    
 


  },
 
})

// لازم اعمل استيراد هنا    متنسااااش 

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer