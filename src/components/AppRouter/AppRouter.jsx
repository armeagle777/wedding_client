import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, NotFound } from "@/pages";

import { Guest } from "..";

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/guest" element={<Guest />} />

        <Route path="*" element={<NotFound message={"Chi gtnvel"} />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
