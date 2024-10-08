import { configureStore } from "@reduxjs/toolkit";
import { accountsSlice } from "./slices/accountsSlice";
import { appStateSlice } from "./slices/appStateSlice";
import { authApi } from "./apis/authApis/authApis";
import { authSlice } from "./slices/authSlice";

const store = configureStore({
  reducer: {
    accounts: accountsSlice.reducer,
    appState: appStateSlice.reducer,
    auth: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { reduceBalance, addBalance, addAccount } = accountsSlice.actions;
export const { updateSelectedAccountId, updateTransferAccountId } =
  appStateSlice.actions;

export default store;
