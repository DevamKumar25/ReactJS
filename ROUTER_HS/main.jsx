import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client' // Corrected import
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom' // Added Route import
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'  // Correct path for Home.jsx
import About from './Component/About/About.jsx' 
import Contact from './Component/Contact/Contact.jsx'
import User from './Component/User/User.jsx'
import Github,{githubInfoLoader} from './Component/Github/Github.jsx'


//  const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout />,
//       children: [
//         {
//           path: "",
//           element: <Home/>
//         },
//         {
//           path : "about",
//           element : <About/>
//         },
//         {
//           path : "contact",
//           element : <Contact/>
//         }
//       ]
//     }
//   ])

 const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:Userid" element={<User/>}/>
        <Route 
        loader={githubInfoLoader}
        path='github'
        element={<Github/>}/>
      </Route>
    )
  )


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)  
