import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Input = ({ setToDoList, toDoList }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const addButtonHandler = () => {
    const newToDoList = {
      id: uuidv4(),
      title,
      body,
      isDone: false,
    };

    // 불변성 유지하며 ToDoList 추가
    setToDoList([...toDoList, newToDoList]);

    // 입력 필드 초기화
    setTitle("");
    setBody("");

    alert("추가 완료!");
  };

  return (
    <section className="input-section">
      <div>
        <span>제목&nbsp;</span>
        <input value={title} onChange={titleChangeHandler} />
        <span>내용&nbsp;</span>
        <input value={body} onChange={bodyChangeHandler} />
      </div>
      <button className="add-button" onClick={addButtonHandler}>
        추가하기
      </button>
    </section>
  );
};
