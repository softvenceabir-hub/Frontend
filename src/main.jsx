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
} from "react-router";
import Rootlayout from "./components/Layouts/Rootlayout.jsx";
import Shop from "./Pages/Shop/Shop.jsx";
import SingleProduct from "./Pages/SingleProduct/SingleProduct.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Checkout from "./Pages/Checkout/Checkout.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<App />} />
        <Route path="/shop" element={<Shop></Shop>} />
        <Route path='/singleProduct/:id' element={<SingleProduct></SingleProduct>} />
        <Route path='/cart' element={<Cart></Cart>} />
        <Route path="/checkout" element={<Checkout></Checkout>}/>
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
);
