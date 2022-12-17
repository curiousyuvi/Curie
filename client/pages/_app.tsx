import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutWrapper from "../components/LayoutWrapper";
import { Provider, useSelector } from "react-redux";
import store, { persistoor, RootState } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ProtectedRouteWrapper from "../components/ProtectedRouteWrapper";
import SocketProvider from "../providers/socketProvider";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistoor}>
          <SocketProvider>
            <ProtectedRouteWrapper>
              <LayoutWrapper>
                <Component {...pageProps} />
              </LayoutWrapper>
            </ProtectedRouteWrapper>
          </SocketProvider>
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
