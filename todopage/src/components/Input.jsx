import React, { useState } from "react";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

const StInputBox = styled.form`
  padding: 50px;
  background-color: #b1d6fe;
  display: flex;
  /* 추가하기 버튼을 맨 오른쪽 끝에 배치하는 */
  justify-content: space-between;
`;

const StInput = styled.input`
  border: 1px solid black;
  margin-right: 20px;
  height: 20px;
  width: 200px;
`;
const StAddButton = styled.button`
  padding: 5px;
  width: 100px;
`;

export const Input = ({ todos, setTodos }) => {
  // 입력 필드의 초기값을 셋팅
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <StInputBox
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
      <div>
        제목{" "}
        <StInput
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        내용{" "}
        <StInput
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
        />
      </div>
      <StAddButton>추가하기</StAddButton>
    </StInputBox>
  );
};
