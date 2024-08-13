import { Suspense } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/common/loading/Loading";
import { router } from "./config/routes";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastProvider } from "./context/ToastContext";
import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./store";
import { SocketProvider } from "./context/SocketContext";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <SocketProvider>
          <ToastProvider>
            <SkeletonTheme baseColor="#c5c0c0" highlightColor="#dbd3d3">
              <Suspense fallback={<Loading />}>
                <RouterProvider router={router} />
              </Suspense>
            </SkeletonTheme>
          </ToastProvider>
        </SocketProvider>
      </Provider>
    </AuthProvider>
  );
}

export default App;
