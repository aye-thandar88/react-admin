import { Suspense } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/common/loading/Loading";
import { router } from "./config/routes";
import HomeLayout from "./components/layout/homeLayout/HomeLayout";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
