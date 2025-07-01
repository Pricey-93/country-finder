import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import RootLayout from './layouts/RootLayout';
import Home from './pages/home/Home';
import CountryDetails from './pages/countryDetails/CountryDetails';
import { countriesLoader, countryLoader } from './api/loaders';

const router = createBrowserRouter([
  {
    path: "/country-finder/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: countriesLoader
      },
      {
        path: "countries/:name", 
        Component: CountryDetails,
        loader: countryLoader
      }
    ]
  },
]);

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <RouterProvider router={ router } />
);
