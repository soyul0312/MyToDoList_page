import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";

function App() {
  // todos에 들어가는 카드의 초기값을 셋팅
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "제목 1",
      contents: "내용 1",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "제목 2",
      contents: "내용 2",
      isDone: true,
    },
    {
      id: uuidv4(),
      title: "제목 3",
      contents: "내용 3",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "제목 4",
      contents: "내용 4",
      isDone: false,
    },
  ]);

  return (
    <div>
      <header
        style={{
          backgroundColor: "#f5dfa2",
          padding: "20px",
        }}
      >
        To Do List
      </header>
      <main
        style={{
          backgroundColor: "#bdf5a2",
          padding: "20px",
        }}
      >
        <Input todos={todos} setTodos={setTodos} />

        <div>
          <TodoList todos={todos} setTodos={setTodos} ListIsDone={false} />
          <TodoList todos={todos} setTodos={setTodos} ListIsDone={true} />
        </div>
      </main>
      <footer
        style={{
          backgroundColor: "#a2e3f5",
          padding: "20px",
        }}
      >
        copyright 2023. Soyul. All rights reserved
      </footer>
    </div>
  );
}

export default App;
