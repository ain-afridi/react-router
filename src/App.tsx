import React, {Suspense, lazy} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProduct from './components/featuredProduct';
import NewProduct from './components/NewProduct';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
import Admin from './components/Admin';
import { AuthProvider } from './components/Auth';
import Profile from './components/Profile';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
const LazyAbout = lazy(() => import('./components/About'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback={"Loading..."}>
              <LazyAbout />
            </Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<FeaturedProduct />} />
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>

        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetail />} />
          <Route path="admin" element={<Admin />} />
          {/* 
          React-router first match routers and then match dynamic routes
          
          */}
        </Route>

        <Route
          path="Profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
