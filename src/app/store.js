import { configureStore } from "@reduxjs/toolkit";

// import { initialValue, rootReducer } from "../reducers/RootReducer";

// import slicenya
import sliceCounter from "../features/counter/sliceCounter";

export const store = configureStore({
    // reducer: rootReducer,
    // preloaded
    // preloadedState: initialValue
    reducer : {
        // alias - value dari slicenya
        counterRTK: sliceCounter,
    }
});

// "ganti istilah" , di dalam redux toolkit, "reducer" => "slices"