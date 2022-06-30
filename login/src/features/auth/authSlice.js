import { createSlice } from "@reduxjs/toolkit";

const isLoggedIn = false;

const authSlice = createSlice({
    name:'auth',
    initialState:{isLoggedIn},
    reducers:{
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false;
        }

    }
})

export default authSlice;
// export const authAction = authSlice.actions
export const{login,logout}= authSlice.actions