import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

import AsyncStorage from "@react-native-async-storage/async-storage"
import transactionsReducer from "../reducers/transactionsReducer"

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
}

export const rootReducer = combineReducers({
  transactionsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof rootReducer>
export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
const useAppDispatch = () => useDispatch<AppDispatch>()
const { dispatch } = store
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { dispatch, useAppSelector, useAppDispatch }
