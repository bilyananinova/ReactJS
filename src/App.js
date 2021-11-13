import './App.css';
import React from 'react';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Login from './components/Login';
import Register from './components/Register';

import Home from './components/Home';
import Blog from './components/Blog';
import Catalog from './components/Catalog';
import Details from './components/Details';

function App() {

  let [path, setPath] = React.useState('/');

  function customRouter(path) {
    setPath(path)
  }

  let routes = {
    '/': <Home />,
    '/blog': <Blog />,
    '/wines': <Catalog />,
    '/login': <Login />,
    '/register': <Register />,
  }


  return (
    <div className="App">
      <Header customRouter={customRouter} />
      <main className="site-main">
        {routes[path] || <h1>Not Found</h1>}
      </main>
      <Footer />
    </div>
  );
}

export default App;
