import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: ["First Create Todo list", "Second create github which show user profile"],
        editMode: null,
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.items = state.items.filter((_, index) => index !== action.payload);
        },
        editTodo: (state, action) => {
            state.items[state.editMode] = action.payload;
            state.editMode = null;
        },
        setEditMode: (state, action) => {
            state.editMode = action.payload;
        },
    },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, setEditMode, editTodo } = todoSlice.actions;
