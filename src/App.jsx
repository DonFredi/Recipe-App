import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Link
}
  from 'react-router-dom'


//LAYOUTS
import RootLayout from './Layouts/RootLayout'
//PAGES
import Home from './pages/Home';
import RecipeCard from './pages/RecipeCard';
import NotFound from './pages/NotFound';

import { DataProvider } from './pages/DataContext';

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="recipe/:query" element={<RecipeCard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return (
    <div>
      <DataProvider>
        <RouterProvider router={router}>
          <RootLayout>
            <Link to="/">Home</Link>
          </RootLayout>
        </RouterProvider>
      </DataProvider>
    </div>

  )
}

export default App
