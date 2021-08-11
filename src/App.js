import './App.css';
import Button from './components/Button';
import SearchField from './components/SearchField';

function App() {
  return (
    <div className="App">
      <Button className="btn" text={"Send Mail"} />
      <Button text={"Sign In"} color={'Blue'} />
      <Button text={"Sign Out"} color={'azure'} />
      <SearchField  className="search-f"/>
    </div>
  );
}

export default App;
