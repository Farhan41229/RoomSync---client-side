import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router';
import App from '../App';
import HomeLayout from '../layouts/HomeLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../components/Login';
import Register from '../components/Register';
import AddListing from '../components/AddListing';
import PrivateRoute from '../components/PrivateRoute';
import ListingsLayout from '../layouts/ListingsLayout';
import AllListings from '../components/AllListings';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
  },
  {
    path: '/listings',
    element: <ListingsLayout></ListingsLayout>,
    children: [
      {
        path: 'alllistings',
        element: <AllListings></AllListings>,
        loader: async () => {
          const response = await fetch('http://localhost:3000/listings');
          if (!response.ok) {
            throw new Error('Failed to fetch listings');
          }
          return response.json(); // Ensure this returns the data
        },
      },
      {
        path: 'addlisting',
        element: (
          <PrivateRoute>
            <AddListing></AddListing>
          </PrivateRoute>
        ),
      },
    ],
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
