import Todos from "./components/Todos";
import todo from "./models/todo";

let todos = [new todo("Learn React"), new todo("Learn TypeScript")];

function App() {
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
