import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";

import './firebase/firebaseConfig';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import BlogArticle from './components/blog/BlogArticle';
import Catalog from './components/catalog/Catalog';
import Details from './components/details/Details';
import ErrorPage from './components/error/ErrorPage';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="site-main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/articles" exact component={Blog} />
          <Route path="/articles/:articleId" component={BlogArticle} />
          <Route path="/wine-catalog" exact component={Catalog} />
          <Route path="/wine-catalog/details/:wineId" component={Details} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={ErrorPage} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
