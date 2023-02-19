import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        value: { email: '', isLoggedin: false },
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }
    },
});

export default userSlice.reducer;
export const { login } = userSlice.actions;
export const userSelector = (state) => state.users.value;