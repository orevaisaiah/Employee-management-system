import './App.css';
import Button from './components/Button';
import SearchField from './components/SearchField';
import CurrentDate from './components/CurrentDate';

function App() {
  return (
    <div className="App">
      <Button className="btn" text={"Send Mail"} />
      <SearchField  className="search-field"/>
      <CurrentDate />
    </div>
  );
}

export default App;
