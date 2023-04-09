import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/comments",
    element: import("../pages/UserComment"),
  },
]);
export default router;
