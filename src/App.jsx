
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import Settings from './components/Settings/Settings';
import NotFound from './components/NotFound/NotFound';
import Web from './components/Web/Web';
import Mobile from './components/Mobile/Mobile';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {

  const routes = createBrowserRouter([
    { path:"",element: <Layout/>, children:[
      { path:"", element: <ProtectedRoutes> <Home/> </ProtectedRoutes> },
      { path:"categories", element: <ProtectedRoutes> <Categories/> </ProtectedRoutes>},
      { path:"product-details/:id", element: <ProtectedRoutes> <ProductDetails/> </ProtectedRoutes>},
      { path:"register", element: <Register/>},
      { path:"login", element: <Login/>},
      { path:"cart", element:<ProtectedRoutes><Cart/></ProtectedRoutes> },
      { path:"settings", element:<ProtectedRoutes><Settings/></ProtectedRoutes> , children: [
        { path:"", element: <Web/>},
        { path:"mobile", element: <Mobile/>}
      ]},
      { path:"*", element: <NotFound/>}
    ]}
  ])


  return (
    <>
<RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
