import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import HomeLayout from '../layouts/HomeLayout';
const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
  },
]);

export default router;
