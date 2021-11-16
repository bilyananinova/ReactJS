import './App.css';
import React from 'react';

import './firebase/firebaseConfig';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Login from './components/Login';
import Register from './components/Register';

import Home from './components/Home';
import Blog from './components/Blog';
import Catalog from './components/Catalog';
import Details from './components/Details';
import ErrorPage from './components/ErrorPage';
import Cart from './components/Cart';

function App() {
  let [path, setPath] = React.useState('/');

  function customRouter(path) {
    setPath(path)
  }

  function router(path) {
    let [empty, pathname, id] = path.split('/');

    pathname = `/${pathname}`;

    let routes = {
      '/': <Home />,
      '/blog': <Blog />,
      '/wines': <Catalog customRouter={customRouter} />,
      '/login': <Login />,
      '/register': <Register />,
      '/details': <Details id={id} />
    }

    return routes[pathname]
  }



  return (
    <div className="App">
      <Header customRouter={customRouter} />
      <main className="site-main">
        {router(path) || <ErrorPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
