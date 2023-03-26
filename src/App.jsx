import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Products from "./pages/Products.jsx";
import Homepage from "./pages/Homepage.jsx";
import ProductsDetailPage from "./pages/ProductDetailPage";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Homepage />} />
      <Route path="products" element={<Products />} />
      <Route path="product/:id" element={<ProductsDetailPage />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
