import React from "react";
import { styled } from "styled-components";

const StEntireBox = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const StCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StCard = styled.div`
  width: 300px;
  height: 230px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px 15px 5px 0px;
  font-size: 18px;
  /* 가운데 정렬 */
  align-items: center;
  /* 버튼을 아래에 위치시키게 하는 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StTextWrapper = styled.div`
  padding-top: 20px;
`;

const StButtonWrapper = styled.div`
  display: flex;
  padding-left: 10px;
  margin-bottom: 15px;
`;

const StAddButton = styled.button`
  margin-bottom: 20px;
  margin-right: 10px;
  width: 100px;
  height: 30px;
  justify-content: space-between;
`;

export const TodoList = ({ todos, setTodos, ListIsDone }) => {
  return (
    <StEntireBox>
      {/* ListIsDone의 false/true값에 따라 할일목록과 완료된목록이 나뉜다 */}
      <h2>{ListIsDone ? "Done" : "Working"}</h2>
      <StCards>
        {/* filter 체이닝 */}
        {/* map함수 --> key 지정 */}
        {/* key = 객체 간의 구별할 수 있는 값 */}
        {todos
          .filter((todo) => todo.isDone === ListIsDone)
          .map((todo) => {
            return (
              <StCard key={todo.id}>
                <StTextWrapper>
                  <h3>{todo.title}</h3>
                  <p>{todo.contents}</p>
                  {/* <p>{todo.id}</p> */}
                  {/* <p>완료여부: {todo.isDone.toString()}</p> */}
                </StTextWrapper>
                <StButtonWrapper>
                  <StAddButton
                    onClick={() => {
                      const newTodos = todos.map((item) => {
                        if (item.id === todo.id) {
                          return { ...item, isDone: !ListIsDone }; // isDone: !item.isDone
                        } else {
                          return item;
                        }
                      });

                      setTodos(newTodos);
                    }}
                  >
                    {ListIsDone ? "취소" : "완료"}
                  </StAddButton>

                  <StAddButton
                    onClick={() => {
                      const deletedTodos = todos.filter((item) => {
                        return item.id !== todo.id;
                      });
                      setTodos(deletedTodos);
                    }}
                  >
                    삭제
                  </StAddButton>
                </StButtonWrapper>
              </StCard>
            );
          })}
      </StCards>
    </StEntireBox>
  );
};
