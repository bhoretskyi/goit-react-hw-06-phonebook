
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlise';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
// import { createStore } from 'redux'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, contactReducer)



export const store = configureStore({
  reducer: {
    contactList: persistedReducer ,
  },
});

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

export const persistor = persistStore(store)