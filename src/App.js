import './App.css';
import Board from './components/Board';
// import  NewStateClass  from './components/NewStateClass';
import CustomSelect from './components/CustomSelect';
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
          Learn React
      </header>
      <body>
      <div className="container">
        <div className="row">
          <div className="col">
            <Board />
          </div>
          <div className="col">
            <CustomSelect />
          </div>
        </div>
      </div>
      </body>
    </div>
  );
}

export default App;
