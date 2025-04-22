import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
    reducer: {
        // Add your reducers here, for example:
        // exampleReducer: exampleSlice.reducer
    }
});

export default Store;