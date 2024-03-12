import logo from './logo.svg';
import './App.css';
import Header from './user/component/header/Header';
import Footer from './user/component/footer/Footer';
import Home from './user/container/home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />

    </div>
  );
}

export default App;
