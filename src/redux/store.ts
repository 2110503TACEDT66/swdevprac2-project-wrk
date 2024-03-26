import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./feature/carSlice";
import { useSelector, TypedUseSelectorHook } from "react-redux";


// const persistConfig = {
//     key:"rootPersist",
//     storage
// }

// const rootReducer = combineReducers({cartSlice})
// const reduxPersistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer:{
        carSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector