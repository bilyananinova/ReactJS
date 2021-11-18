import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";

import './firebase/firebaseConfig';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Login from './components/Login';
import Register from './components/Register';

import Home from './components/Home';
import Blog from './components/Blog';
import BlogArticle from './components/BlogArticle';
import Catalog from './components/Catalog';
import Details from './components/Details';
import ErrorPage from './components/ErrorPage';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="site-main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/articles" exact component={Blog} />
          <Route path="/articles/:articleId" component={BlogArticle} />
          <Route path="/wines" exact component={Catalog} />
          <Route path="/wines/details/:wineId" component={Details} />
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
