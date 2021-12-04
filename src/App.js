import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import { auth } from './firebase/firebaseConfig';
import { logout } from './services/authService';
import authorization from './authorization';
import UserContext from "./contexts/UserContext";

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Login from './components/login/Login';
import Register from './components/register/Register';

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
import Cart from './components/cart/Cart';

function App() {
  let [user, setUser] = React.useState(null);

  React.useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, [user]);

  let authInfo = authorization(user);

  return (
    <div className="App">
      <UserContext.Provider value={authInfo}>

        <Header />

        <main className="site-main">
          <Switch>

            <Route path="/" exact component={Home} />

            <Route path="/articles" exact component={Blog} />
            <Route path="/articles/create" component={BlogArticleCreate} />
            <Route path="/articles/:articleId" exact component={BlogArticle} />
            <Route path="/articles/:articleId/edit" component={EditArticle} />

            <Route path="/wine-catalog/create" component={ProductCreate} />
            <Route path="/wine-catalog/:wineId/edit" component={EditProduct} />
            <Route path="/wine-catalog/:wineId/details" component={Details} />
            <Route path="/wine-catalog/:category?" exact component={Catalog} />

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

      </UserContext.Provider>
    </div>
  );
}

export default App;
