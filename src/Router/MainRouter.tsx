import { createBrowserRouter } from "react-router-dom";
import Homescreen from "../Pages/Homescreen";
import Layout from "../LayOut/Layout";
import Upload from "../Pages/Upload";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homescreen/>,
      },
    ],
  },
  {
    path: "/upload",
    element: <Upload />
  }
]);
