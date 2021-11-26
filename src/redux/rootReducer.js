import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import invoiceReducer from "./Invoices/invoice-reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["home"],
};

const rootReducer = combineReducers({
    home: invoiceReducer,
});

export default persistReducer(persistConfig, rootReducer);
