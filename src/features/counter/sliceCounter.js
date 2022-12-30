// slice / reducer via redux toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialStateForCounter = {
    user: "Ryzz",
    counter: 100000,
  };
  
// bikin slicenya
const counterRTKSlice = createSlice({
    // berikan nama untuk slicenya
    name: "counterRTK",
    // initial statenya apa sih untuk sih "slice" ini?
    initialState: initialStateForCounter,
    // definisikan "action" bisa apa saja
    reducers: {
        // increment, decrement, reset, incrementSpec, decrementSpec

        // fungsi minimal 1 parameter (state)
        // maksimal 2 parameter (state, action data / payload)
        increment(state) {
            //kita berikan hasil return nya

            // state harus immutable?

            // Tapi itu kalau kita menggunakan reducer standard

            // jadi di dalam redux toolkit semua state itu sudah dibungkus 
            // dengan suatu hal yang bernama "immer"

            // kita bisa menuliskan perubahan state, SEOLAH OLAH seperti statenya itu
            // MUTABLE !

            // Artinya kita boleh langsung mengassign / mengsamadengankan !
            state.counter += 1;
        },
        decrement(state) {
            state.counter -= 1;
        },
        reset(state) {
            state.counter = 0;
        },
        incrementSpec(state, action) {
            state.counter += action.payload;
        },
        decrementSpec(state, action) {
            state.counter -= action.payload;
        }
    }
});

// ---ACTIONS ---
export const { increment, decrement, reset, incrementSpec, decrementSpec } = counterRTKSlice.actions;

// --- SELECTORS ---
export const selectUser = (state) => state.counterRTK.user;
export const selectCounter = (state) => state.counterRTK.counter;

// --- REDUCERS ---
export default counterRTKSlice.reducer;