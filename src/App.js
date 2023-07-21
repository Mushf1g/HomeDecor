import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Layouts/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Products from "./pages/products";
import Sale from "./pages/Sale";
import ContactPage from "./pages/ContactPage";
import AuthLayout from "../src/Layouts/AuthLayout";
import Login from "./pages/Login";
import ResetPassword from "./pages/Resetpassword";
import Verification from "./pages/verification";
import Newpassword from "./pages/newpassword";
import Register from "./pages/register";
import Myaccount from "./Layouts/Myaccount"
import PersonalInformation from "./pages/PersonalInformation"
import WishList from "./pages/WishList";
import ShoppingCheckout from "./Layouts/ShoppingCheckout"
import Checkout from "./pages/checkout";
import Shoppingcart from "./pages/shoppingcart";
import ProductsDetail from "./pages/ProductsDetail"

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
            <Route path="/products"  >
              <Route index element={<Products />}/>
              <Route path=":id" element={<ProductsDetail />}/>
            </Route>
          <Route path="/collections" element={<Collections />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/myaccount" element={<Myaccount/>} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="verification" element={<Verification />} />
          <Route path="newpassword" element={<Newpassword />} />
          <Route path="register" element={<Register/>}/>
        </Route>

        <Route path="/myaccount" element={<Myaccount/>}>
          <Route path="personal-information" element={<PersonalInformation />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>

        <Route path="/shopping-cart" element={<ShoppingCheckout/>}>
          <Route path="/shopping-cart" element={<Shoppingcart/>}/>
          <Route path="checkout" element={<Checkout/>}/>
        </Route>

      </Routes>
    </>
  );
}

export default App;
