import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";
import { styled } from "styled-components";

// 스타일지정해줄 때는 백틱으로 묶어주기(``) = 문자열

const StEntireBox = styled.div`
  /* background-color: lightblue; */
  width: 1000px;
  height: 100%;
  /* 전체 박스를 가운데로 정렬 */
  margin: auto;
`;

const StHeader = styled.h2`
  padding: 10px 10px 10px 0px;
`;

const StFooter = styled.footer`
  background-color: rgb(241, 241, 241);
  padding: 30px;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

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
    <StEntireBox>
      <StHeader>To Do List</StHeader>
      <main>
        <Input todos={todos} setTodos={setTodos} />

        <div>
          <TodoList todos={todos} setTodos={setTodos} ListIsDone={false} />
          <TodoList todos={todos} setTodos={setTodos} ListIsDone={true} />
        </div>
      </main>
      <StFooter>copyright 2023. Soyul. All rights reserved</StFooter>
    </StEntireBox>
  );
}

export default App;
