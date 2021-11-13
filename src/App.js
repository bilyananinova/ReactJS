import './App.css';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Login from './components/Login';
import Register from './components/Register';

import Home from './components/Home';
import Blog from './components/Blog';
import Catalog from './components/Catalog';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Header/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
