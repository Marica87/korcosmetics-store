import { createSlice } from '@reduxjs/toolkit';

export const cosmeticSlice = createSlice ({
    name: 'cosmetic',
    initialState: {
        selectedCategory: "ВСЕ КАТЕГОРИИ"
    },

    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    }
})

export const getSelectedCategory = state => state.cosmetic.selectedCategory;
export const {filterCategory} = cosmeticSlice.actions;
export default cosmeticSlice.reducer;