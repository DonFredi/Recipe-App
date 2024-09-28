import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,

}
  from 'react-router-dom'


import RootLayout from './Layouts/RootLayout';
import NotFound from './pages/NotFound';

const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return (

    <div>

      <RouterProvider router={router} />

    </div >

  )
}

export default App
