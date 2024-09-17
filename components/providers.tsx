"use client";

import { ReactNode } from "react";
import store from "../store/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";



function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <SessionProvider >
        {children}
      </SessionProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </Provider>
  );
}

export default Providers;
