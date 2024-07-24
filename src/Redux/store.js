import { configureStore } from "@reduxjs/toolkit";
import { conversationsReducer, uIdReducer } from "./slices";

import SimpleCrypto from "simple-crypto-js";

function saveToLocalStorage({ getState }) {
  try {
    return (next) => (action) => {
      const result = next(action);
      const serialized = JSON.stringify(getState());
      let s = new SimpleCrypto("ksjdfbdkjsgbvsrkjgbvrekjb");
      const encrypted = s.encrypt(serialized);
      typeof localStorage !== "undefined" &&
        localStorage?.setItem("bulkdata", JSON.stringify(encrypted));
      return result;
    };
  } catch (e) {
    return (next) => (action) => {
      return next(action);
    };
  }
}

function loadFromLocalStorage() {
  try {
    const serialized =
      typeof localStorage !== "undefined" && localStorage?.getItem("bulkdata");
    let s = new SimpleCrypto("ksjdfbdkjsgbvsrkjgbvrekjb");
    const decrypt = s.decrypt(JSON.parse(serialized));
    if (decrypt === null) return undefined;
    return decrypt;
  } catch (e) {
    return undefined;
  }
}

export const store = configureStore({
  reducer: {
    conversations: conversationsReducer,
    uId: uIdReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: loadFromLocalStorage(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorage),
});
