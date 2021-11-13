import './App.css';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
