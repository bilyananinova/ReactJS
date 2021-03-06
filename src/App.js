import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import { auth } from './firebase/firebaseConfig';
import { logout } from './services/authService';
import { AuthProvider } from "./contexts/UserContext";
import AdminRoute from "./components/common/helpers/AdminRoute";
import PrivateRoute from "./components/common/helpers/PrivateRoute";

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Login from './components/login/Login';
import Register from './components/register/Register';
import Cart from './components/cart/Cart';
import UserPage from './components/user/UserPage';

import Home from './components/home/Home';

import Blog from './components/blog/Blog';
import BlogArticle from './components/article/BlogArticle';
import BlogArticleCreate from './components/createArticle/BlogArticleCreate';
import EditArticle from './components/editArticle/EditArticle';

import Catalog from './components/catalog/Catalog';
import ProductCreate from './components/createProduct/ProductCreate';
import EditProduct from './components/editProduct/EditProduct';
import Details from './components/details/Details';

import ErrorPage from './components/error/ErrorPage';


function App() {
  return (
    <AuthProvider >
      <div className="App">

        <Header />

        <main className="site-main">
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/articles" exact component={Blog} />
            <AdminRoute path="/articles/create" component={BlogArticleCreate} />
            <Route path="/articles/:articleId" exact component={BlogArticle} />
            <AdminRoute path="/articles/:articleId/edit" component={EditArticle} />

            <Route path="/wine-catalog" exact component={Catalog} />
            <Route path="/wine-catalog/:wineId/details" component={Details} />
            <AdminRoute path="/wine-catalog/create" component={ProductCreate} />
            <AdminRoute path="/wine-catalog/:wineId/edit" component={EditProduct} />

            <PrivateRoute path="/user/:userId" component={UserPage} />
            <PrivateRoute path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logout" render={() => {
              logout(auth);
              return <Redirect to="/" />
            }} />

            <Route component={ErrorPage} />
          </Switch>
        </main>

        <Footer />

      </div>
    </AuthProvider>
  );
}

export default App;