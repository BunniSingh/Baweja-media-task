import {createSlice} from '@reduxjs/toolkit'


const githubSlice = createSlice({
    name: 'github',
    initialState: {
        user: null,
        repos: [],
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
})

export default githubSlice.reducer;
export const { setUser } = githubSlice.actions;