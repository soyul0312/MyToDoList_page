import React from "react";

export const TodoList = ({ todos, setTodos, ListIsDone }) => {
  return (
    <div>
      {/* ListIsDone의 false/true값에 따라 할일목록과 완료된목록이 나뉜다 */}
      <h2>{ListIsDone ? "Done" : "Working"}</h2>

      {/* filter 체이닝 */}
      {/* map함수 --> key 지정 */}
      {/* key = 객체 간의 구별할 수 있는 값 */}
      {todos
        .filter((todo) => todo.isDone === ListIsDone)
        .map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                border: "1px solid black",
                paddingLeft: "10px",
                margin: "10px",
                paddingBottom: "10px",
              }}
            >
              <p>{todo.id}</p>
              <h3>{todo.title}</h3>
              <p>{todo.contents}</p>
              <p>완료여부: {todo.isDone.toString()}</p>
              <button
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
              </button>

              <button
                onClick={() => {
                  const deletedTodos = todos.filter((item) => {
                    return item.id !== todo.id;
                  });
                  setTodos(deletedTodos);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
    </div>
  );
};
