import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

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

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  // 추가 버튼 클릭 : 카드 추가
  const addButtonHandler = () => {
    const newToDoList = {
      id: uuidv4(),
      title,
      body,
      isDone: false,
    };

    alert("추가 완료!");

    // 불변성
    setToDoList([...toDoList, newToDoList]);

    // 새로운 값을 추가할 때마다 입력 필드 초기화
    setTitle("");
    setBody("");
  };

  // 삭제 버튼 클릭 : 카드 삭제
  const clickRemoveButtonHandler = (id) => {
    const deleteToDoList = toDoList.filter((toDoList) => toDoList.id !== id);
    setToDoList(deleteToDoList);
  };

  // 완료 버튼 클릭 : 카드 아래로 이동
  const clickFinishedButtonHandler = (id) => {
    const completedToDoList = toDoList.filter((toDoList) => toDoList.id === id)[0];
    if (!completedToDoList) {
      return;
    }
    const updatedToDoList = toDoList.filter((toDoList) => toDoList.id !== id);
    updatedToDoList.push({ ...completedToDoList, isDone: true });
    setToDoList(updatedToDoList);
    alert("멋지다!");
  };

  // 취소 버튼 클릭시 카드 위로 이동
  const clickCanceledButtonHandler = (id) => {
    const canceledToDoList = toDoList.filter((toDoList) => toDoList.id === id)[0];
    if (!canceledToDoList) {
      return;
    }
    const updatedToDoList = toDoList.filter((toDoList) => toDoList.id !== id);
    updatedToDoList.push({ ...canceledToDoList, isDone: false });
    setToDoList(updatedToDoList);
    alert("다시 시작해보자!");
  };

  return (
    <div className="entireSection">
      <header className="headerSection">
        <h2> My Todo List </h2>
      </header>

      {/* input section */}
      <section className="inputSection">
        <div>
          <span>제목&nbsp;</span>
          <input
            value={title}
            onChange={titleChangeHandler}
          />
          <span>내용&nbsp;</span>
          <input
            value={body}
            onChange={bodyChangeHandler}
          />
        </div>
        <button className="addButton" onClick={addButtonHandler}>
          추가하기 </button>
      </section>

      {/* Working section */}
      <h3>Working</h3>
      <section className="workingSection">
        {toDoList
          .filter((toDoList) => toDoList.isDone !== true)
          .map((card) => {
            return (
              <div className="workingCard" key={card.id}>
                <h3>{card.title}</h3>
                <div>{card.body}</div>
                <div>
                  <button
                    onClick={() => clickRemoveButtonHandler(card.id)}
                  > 삭제 </button>
                  <button
                    onClick={() => {
                      clickFinishedButtonHandler(card.id);
                    }}
                  > 완료 </button>
                </div>
              </div>
            );
          })}
      </section>
      
      {/* Done section */}
      <h3>Done</h3>
      <section className="doneSection">
        {toDoList
          .filter((toDoList) => toDoList.isDone === true)
          .map((card) => {
            return (
              <div className="doneCard" key={card.id}>
                <h3>{card.title}</h3>
                <div>{card.body}</div>
                <div>
                  <button
                    onClick={() => clickRemoveButtonHandler(card.id)}
                  > 삭제 </button>
                  <button
                    onClick={() => clickCanceledButtonHandler(card.id)}
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
