import logo from './logo.svg';
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './layout/Main';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/products',
          element:<PrivateRoute><Products></Products></PrivateRoute>
        },
        {
          path:'/cart',
          element:<PrivateRoute><Cart></Cart></PrivateRoute>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
