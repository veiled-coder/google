import './App.css';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Search />
      <Footer/>
    </div>
  );
}

export default App;
