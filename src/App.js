import './App.css';
import MyList from './components/MyList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p style={{ color: 'black' }}>Lista zadań</p>
        <MyList />
      </header>
    </div>
  );
}

export default App;
