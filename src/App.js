import './App.css';
import Developer from './components/Developer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Developer name="João" age="15" country="Brazil"/>
        <Developer name="Maria" age="21" country="Brazil"/>
        <Developer name="Henrique" age="22" country="Italy"/>
        <Developer name="Pedro" age="45" country="Englad"/>
        <Developer name="Fernanda" age="32" country="New Zeland"/>
      </header>
    </div>
  );
}

export default App;
