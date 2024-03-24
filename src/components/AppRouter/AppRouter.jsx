import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { NotFound, Guest } from "@/pages";

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/:guestId" element={<Guest />} />
        <Route
          path="*"
          element={<NotFound message="Նման էջ գոյություն չունի" />}
        />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
