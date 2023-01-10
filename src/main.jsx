import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './components/ErrorPage';
import Projects from './components/Projects';
import Project from './components/Project';
import Home from './components/Home';
import About from './components/About';

import db from './store/db.json';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        loader: () => db,
        element: <Projects />,
      },
      {
        path: 'projects/:project',
        loader: ({ params }) => db.filter((data) => data.id === params.project),
        element: <Project />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
