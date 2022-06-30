import { createSlice } from "@reduxjs/toolkit";

 
const initialState = {
    count: 0,
  }

 export const counterSlice = createSlice({

    name: 'counter',
    initialState,
    reducers:{
     inc:(state)=>{
        state.count += 1
         },
         dec:(state)=>{
            state.count -= 1
    }
}
})

    export default counterSlice.reducer;
    export const {inc,dec} = counterSlice.actions







