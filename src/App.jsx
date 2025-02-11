
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import Contact from './components/Contact/Contact';
import Settings from './components/Settings/Settings';
import NotFound from './components/NotFound/NotFound';
import Web from './components/Web/Web';
import Mobile from './components/Mobile/Mobile';

function App() {

  const routes = createBrowserRouter([
    { path:"",element: <Layout/>, children:[
      { path:"home", element: <Home/>},
      { path:"categories", element: <Categories/>},
      { path:"contact", element: <Contact/>},
      { path:"settings", element: <Settings/>, children: [
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
