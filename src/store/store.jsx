   import { configureStore } from "@reduxjs/toolkit"
    import counterSlice from "../reducers/counterSlice"
   const store = configureStore({
    reducer: {
        counterSlice: counterSlice,
    }
  })
  
  // Can still subscribe to the store
  store.subscribe(() => console.log(store.getState()))
  store.dispatch(incremented())
  // {value: 1}
  store.dispatch(incremented())
  // {value: 2}
  store.dispatch(decremented())
  // {value: 1}
  
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    
}