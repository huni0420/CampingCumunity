import { combineReducers, createStore } from 'redux';
import { user } from './user'

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    //whitelist: ["user"]
};

const rootReducer = combineReducers({ 
    user: user
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configStore() {
    const store = createStore(persistedReducer);
    const persistor = persistStore(store);

    return { store, persistor }
}