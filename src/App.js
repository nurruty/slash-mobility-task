import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import ByArtist from './pages/ByArtist';
import Icon from './components/Icon/Icon';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Header
        left={<Icon name="gesture" color="secondary" size="mini" />}
        center={<SearchBar placeholder="Search" />}
        right={<Icon name="heart" color="secondary" size="mini" />}
      />
      <ByArtist />
    </div>
  );
}

export default App;
