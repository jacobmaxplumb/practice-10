import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullName: '',
    shirtSize: '',
    animals: []
}

export const contactFormSlice = createSlice({
    name: 'contactForm',
    initialState: initialState,
    reducers: {
        updateText(state, action) {
            const {key, value} = action.payload;
            state[key] = value;
        },
        updateAnimals(state, action) {
            const animal = action.payload;
            if (!state.animals.includes(animal)) state.animals.push(animal);
            else state.animals = state.animals.filter(a => a !== animal);
        }
    }
})

export const { updateText, updateAnimals } = contactFormSlice.actions;