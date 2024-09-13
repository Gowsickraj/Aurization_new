import { useContext} from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './NAVBAR/Nav';
import { Home } from './PAGES/Home';
import { About } from './PAGES/About';
import { Register } from './PAGES/Register';
import { Login } from './PAGES/Login';
import { Profile } from './PAGES/Profile';
import { AuthContext } from './USECONTEXT/AuthContext';
import { LineChart } from './CHARTS/Linechart';

// export const App = () =>{
// useEffect(() => {
// console.log(`${process.env.REACT_APP_SERVER}/api/method`);

// axios.get(`${process.env.REACT_APP_SERVER}/api/method`)
// .then((res) => {
// console.log(res.data);
// if (res.data.code === 200) {
//   alert(res.data.db)
// } else if (res.data.code === 400) {
//   alert(res.data.msg)
// }
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   }, [])
//   return (
//     <>
//     </>
//   );
// }
export const App = () => {
  const {user} = useContext(AuthContext)
  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [{
      path: "/Home",
      element: <Home />,
    },
    {
      path:"/About",
      element:<About/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/profile",
      element:<Profile/>
    }
    ]

  }])
  return (
    <>
  <RouterProvider router={router}/>
    </>
  )
}
