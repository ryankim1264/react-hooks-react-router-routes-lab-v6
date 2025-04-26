// routes.js
import Home from "./components/Home";
import Directors from "./components/Directors";
import Actors from "./components/Actors";
import Movie from "./components/Movie"; 
import ErrorPage from './components/ErrorPage'

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/movie/:id", 
    element: <Movie />,
  },

    {
      path: "/directors",
      element: <Directors />,
    },

    {
      path: "*", 
      element: <ErrorPage />,
    },
];

export default routes;
