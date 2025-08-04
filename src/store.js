import { configureStore } from '@reduxjs/toolkit';

import todoSlice from './slices/todoSlice';
import githubSlice from './slices/githubSlice';

const store = configureStore({
    reducer: {
        todo: todoSlice,
        github: githubSlice,
    }
})

export default store;