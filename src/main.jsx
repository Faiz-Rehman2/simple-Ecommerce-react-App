import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Products from './components/Products.jsx'
import Navbar from './components/Navbar.jsx'


createRoot(document.getElementById('root')).render(
   <App />
   {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Navbar />
        },
        {
          path: "about",
          element: <Products />,}
        ]
      }


)
