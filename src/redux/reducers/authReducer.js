import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    isLoggedIn: false,
    user: {
        name: '',
        email: ''
    }
};


const authSlice = createSlice({
    name:"auth",
    initialState, 
    reducers: {
        authLogIn: (state) => {
            state.isLoggedIn = true
        },
        authLogOut: (state) => {
            state.isLoggedIn = false
        }
    }
});


export const { authLogIn, authLogOut } = authSlice.actions;


export default authSlice.reducer;