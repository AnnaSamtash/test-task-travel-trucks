import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/slice';
import { filtersReducer } from './filters/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { modalReducer } from './modal/slice';

const campersPersistConfig = {
  key: 'campers',
  storage,
  whitelist: ['selected'],
};

const persistedReducer = persistReducer(campersPersistConfig, campersReducer);

export const store = configureStore({
  reducer: {
    campers: persistedReducer,
    filters: filtersReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
