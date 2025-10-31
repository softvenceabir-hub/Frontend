import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@/components/theme-provider"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  BrowserRouter,Routes
} from "react-router";
import Rootlayout from "./components/Layouts/Rootlayout.jsx";
import Shop from "./Pages/Shop/Shop.jsx";
import SingleProduct from "./Pages/SingleProduct/SingleProduct.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Checkout from "./Pages/Checkout/Checkout.jsx";
import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import Team from "./Pages/Team/Team.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
 <Route>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<App />} />
        <Route path="/shop" element={<Shop></Shop>} />
        <Route path='/singleProduct/:id' element={<SingleProduct></SingleProduct>} />
        <Route path='/cart' element={<Cart></Cart>} />
        <Route path="/checkout" element={<Checkout></Checkout>}/>
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/team" element={<Team/>}/>
       
      </Route>
      <Route path="*" element={<h1 className="text-3xl text-center pt-20">404 - Page Not Found!</h1>}>
      </Route>
    </Route>
     <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
    </Route>
   
  )
);

createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
);
