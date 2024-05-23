import './App.css';

import BusinessList from './BusinessList';
import SearchBar from './SearchBar';


function App() {
  return (
    <div className="container">
      <header>
        <h1>Ravenous</h1>
      </header>
      <div><SearchBar /></div>
      <div><BusinessList /></div>
    </div>
  );
}

export default App;
