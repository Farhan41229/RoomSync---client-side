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
import MyListings from '../components/MyListings';
import ListingDetails from '../components/ListingDetails';
import UpdateListing from '../components/UpdateListing';

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
          const response = await fetch(
            'https://room-sync-server-one.vercel.app/listings'
          );
          if (!response.ok) {
            throw new Error('Failed to fetch listings');
          }
          return response.json(); // Ensure this returns the data
        },
      },
      {
        path: 'updatelisting/:id',
        element: (
          <PrivateRoute>
            <UpdateListing></UpdateListing>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch(
            `https://room-sync-server-one.vercel.app/listings/${params.id}`
          );
          if (!response.ok) {
            throw new Error('Failed to fetch listings');
          }
          return response.json(); // Ensure this returns the data
        },
      },
      {
        path: 'listingDetails/:id',
        element: (
          <PrivateRoute>
            <ListingDetails></ListingDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch(
            `https://room-sync-server-one.vercel.app/listings/${params.id}`
          );
          if (!response.ok) {
            throw new Error('Failed to fetch listings');
          }
          return response.json(); // Ensure this returns the data
        },
      },
      {
        path: 'mylisttings',
        element: (
          <PrivateRoute>
            <MyListings></MyListings>
          </PrivateRoute>
        ),
        loader: async () => {
          const response = await fetch(
            'https://room-sync-server-one.vercel.app/listings'
          );
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
