import './App.css';

import BusinessList from './BusinessList';
import SearchBar from './SearchBar';


const businesses = [
  {
    name: 'Buniness 1',
    img: 'whatever',
  },
  {
    name: 'Buniness 2',
    img: 'whatever',
  },
  {
    name: 'Buniness 3',
    img: 'whatever',
  }
];

function App() {
  return (
    <div className="container">
      <header>
        <h1>Ravenous</h1>
      </header>
      <div><SearchBar /></div>
      <div><BusinessList businesses={businesses} /></div>
    </div>
  );
}

export default App;
