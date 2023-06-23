import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Input = ({ todos, setTodos }) => {
  // 입력 필드의 초기값을 셋팅
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          // 새로고침 방지 명령어
          event.preventDefault();
          const newTodo = {
            id: uuidv4(),
            title: title,
            contents: contents,
            // 처음에는 모두 다 할일 목록에 넣어야 하니 false로 설정
            isDone: false,
          };
          // todos.push(newTodo) = react가 감지하지 못해서 사용X
          setTodos([...todos, newTodo]);
        }}
      >
        제목{" "}
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        내용{" "}
        <input
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
        />
        <button>추가하기</button>
      </form>
    </div>
  );
};
