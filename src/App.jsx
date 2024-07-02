import { Suspense } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/common/loading/Loading";
import { router } from "./config/routes";
import { SkeletonTheme } from "react-loading-skeleton";
import ToastProvider from "./utils/toastProvider";
import AuthProvider from "./utils/authProvider";

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <SkeletonTheme baseColor="#c5c0c0" highlightColor="#dbd3d3">
          <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
          </Suspense>
        </SkeletonTheme>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
