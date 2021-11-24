import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import { auth } from './firebase/firebaseConfig';
import { logout, getUser } from './services/authService';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import BlogArticle from './components/blog/BlogArticle';
import BlogArticleCreate from './components/blog/BlogArticleCreate';
import Catalog from './components/catalog/Catalog';
import ProductCreate from './components/catalog/ProductCreate';
import EditProduct from './components/editProduct/EditProduct';
import Details from './components/details/Details';
import ErrorPage from './components/error/ErrorPage';
import Cart from './components/cart/Cart';

function App() {
  let [user, setUser] = React.useState(null);

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user != null) {
        getUser(user.uid).then(user => {
          setUser(user.data())
        })
      }
    });
  }, []);

  let authInfo = {
    isAuthenticated: Boolean(user),
    email: user?.email,
    name: user?.name,
    cart: user?.cart
  }

  return (
    <div className="App">
      <Header authInfo={authInfo} />

      <main className="site-main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/articles" exact component={Blog} />
          <Route path="/articles/create" component={BlogArticleCreate} />
          <Route path="/articles/:articleId" component={BlogArticle} />
          <Route path="/wine-catalog" exact render={() => <Catalog authInfo={authInfo} />} />
          <Route path="/wine-catalog/create" component={ProductCreate} />
          <Route path="/wine-catalog/:wineId/details" render={(props) => <Details authInfo={authInfo} {...props} />} />
          <Route path="/wine-catalog/:wineId/edit" component={EditProduct} />
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
  );
}

export default App;
