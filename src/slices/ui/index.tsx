import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum CaseItem {
    CFUS,
    WATCHES,
    HEALTHCARE_ADMIN,
    HEALTHCARE_APP,
    LOCALIZATION_ADMIN,
    E_LEARNING_APP,
}

export interface UIState {
    isScrollable: boolean;
    isContactFormOpen: boolean;
    activeCase: CaseItem | null;
    isMenuOpen: boolean;
}

const initialState: UIState = {
    isScrollable: true,
    isContactFormOpen: false,
    activeCase: null,
    isMenuOpen: false,
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleScroll: state => {
            state.isScrollable = !state.isScrollable;
        },
        toggleMenu: state => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        toggleContactForm: state => {
            state.isContactFormOpen = !state.isContactFormOpen;
        },
        toggleCase: (state, action: PayloadAction<CaseItem | null>) => {
            state.activeCase = action.payload;
        },
    },
});

export const { toggleScroll, toggleMenu, toggleContactForm, toggleCase } = uiSlice.actions;

export default uiSlice.reducer;
