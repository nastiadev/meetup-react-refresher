import './App.css';
import Todo from './components/Todo';

function App() {
  const data = ['JS', 'TS', 'React', 'Rust'];
  return (
    <div>
      <h1>Nothing</h1>
      {data.map((e) => (
        <Todo data={e} />
      ))}
    </div>
  );
}

export default App;
