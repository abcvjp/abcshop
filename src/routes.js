import { Navigate } from 'react-router-dom';

import HomePage from 'src/pages/HomePage';
import CategoryPage from 'src/pages/CategoryPage';
import CartPage from 'src/pages/CartPage';
import ProductPage from 'src/pages/ProductPage';
import SearchPage from 'src/pages/SearchPage';
import CheckoutPage from 'src/pages/CheckoutPage';
import LoginPage from 'src/pages/LoginPage';

const routes = [
  { path: '/login', element: <LoginPage /> },
  { path: '/product/:productId', element: <ProductPage /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/checkout', element: <CheckoutPage /> },
  { path: '/', element: <HomePage /> },
  { path: '/category/:categoryId', element: <CategoryPage /> },
  { path: '*', element: <Navigate to="/" /> }
];

export default routes;
