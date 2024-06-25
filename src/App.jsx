import { Suspense } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/common/loading/Loading";
import { router } from "./config/routes";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <SkeletonTheme baseColor="#c5c0c0" highlightColor="#dbd3d3">
        <RouterProvider router={router} />
      </SkeletonTheme>
    </Suspense>
  );
}


export default App;
