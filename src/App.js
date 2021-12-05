import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import { auth } from './firebase/firebaseConfig';
import { logout } from './services/authService';
import { getUser } from "./services/authService";
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
    auth.onAuthStateChanged(user => {

      if (user) {
        let userId = user.uid;
        let isAdmin = false;

        if (user?.uid === 'GZ6ZSEzc5VRUjR2Ygh1VsSje9mx2') {
          isAdmin = true;
        }

        getUser(user.uid)
          .then(user => {
            setUser({ ...user.data(), id: userId, isAdmin, isLogged: true })
          })
      } else {
        setUser(null)
      }


    });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div className="App">

        <Header />

        <main className="site-main">
          <Switch>

            <Route path="/" exact component={Home} />

            <Route path="/articles" exact component={Blog} />
            <Route path="/articles/create" component={BlogArticleCreate} />
            <Route path="/articles/:articleId" exact component={BlogArticle} />
            <Route path="/articles/:articleId/edit" component={EditArticle} />

            <Route path="/wine-catalog" component={Catalog} />
            <Route path="/wine-catalog/create" component={ProductCreate} />
            <Route path="/wine-catalog/:wineId/edit" component={EditProduct} />
            <Route path="/wine-catalog/:wineId/details" component={Details} />

            <Route path="/cart" component={Cart} />
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
    </UserContext.Provider>
  );
}

export default App;
