import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import { Input } from "./components/Input";

function App() {
  const [toDoList, setToDoList] = useState([
    {
      id: uuidv4(),
      title: "리액트 공부",
      body: "리액트 기초를 공부해봅시다",
      isDone: true,
    },
    {
      id: uuidv4(),
      title: "리액트 공부",
      body: "리액트 기초를 공부해봅시다",
      isDone: false,
    },
  ]);

  // 삭제 버튼 클릭 : 카드 삭제
  const RemoveButtonHandler = (id) => {
    const updatedToDoList = toDoList.filter((item) => item.id !== id);
    setToDoList(updatedToDoList);
  };
 
  const updateToDoList = (id, isDone) => {
    const updatedToDoList = toDoList.map((item) => {
      if (item.id === id) {
        return { ...item, isDone };
      }
      return item;
    });
    setToDoList(updatedToDoList);
  };
  
  // 완료 버튼 클릭 : 카드 아래로 이동
  const FinishedButtonHandler = (id) => {
    updateToDoList(id, true);
  };
  
  // 취소 버튼 클릭시 카드 위로 이동
  const CanceledButtonHandler = (id) => {
    updateToDoList(id, false);
  };

  return (
    <div className="entire-section">
      <header className="header-section">
        <h2> My Todo List </h2>
      </header>

      {/* input section */}
      <Input todoList = {toDoList} setToDoList = {setToDoList} />

      {/* Working section */}
      <h3>Working</h3>
      <section className="working-section">
        {toDoList
          .filter((toDoList) => toDoList.isDone !== true)
          .map((card) => {
            return (
              <div className="working-card" key={card.id}>
                <h3>{card.title}</h3>
                <div>{card.body}</div>
                <div>
                  <button
                    onClick={() => RemoveButtonHandler(card.id)}
                  > 삭제 </button>
                  <button
                    onClick={() => {
                      FinishedButtonHandler(card.id);
                    }}
                  > 완료 </button>
                </div>
              </div>
            );
          })}
      </section>
      
      {/* Done section */}
      <h3>Done</h3>
      <section className="done-section">
        {toDoList
          .filter((toDoList) => toDoList.isDone === true)
          .map((card) => {
            return (
              <div className="done-card" key={card.id}>
                <h3>{card.title}</h3>
                <div>{card.body}</div>
                <div>
                  <button
                    onClick={() => RemoveButtonHandler(card.id)}
                  > 삭제 </button>
                  <button
                    onClick={() => CanceledButtonHandler(card.id)}
                  > 취소 </button>
                </div>
              </div>
            );
          })}
      </section>
      <footer>
        <h6>copyright 2023. Soyul. All rights reserved</h6>
      </footer>
    </div>
  );
}

export default App;
