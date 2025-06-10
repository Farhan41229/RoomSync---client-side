import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router';
import App from '../App';
import HomeLayout from '../layouts/HomeLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../components/Login';
import Register from '../components/Register';
import AddListing from '../components/AddListing';
import PrivateRoute from '../components/PrivateRoute';
const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
  },
  {
    path: '/addlistings',
    element: (
      <PrivateRoute>
        <AddListing></AddListing>
      </PrivateRoute>
    ),
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      { path: 'login', element: <Login></Login> },
      { path: 'register', element: <Register></Register> },
    ],
  },
]);

export default router;
