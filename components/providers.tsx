"use client";

import { ReactNode } from "react";
import store from "../store/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </Provider>
  );
}

export default Providers;
