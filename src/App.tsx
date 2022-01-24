import React, { useState } from 'react';
import './App.css';
import { ITodoListProps, TodoList } from './Components/TodoListComponent';
import NewTodo from './Components/NewTodoComponent';

function App() {
    const testTodos: ITodoListProps = {
        todos: [
            {
                id: 1,
                title: "aaaaaaaaa",
                due: new Date("2021-01-31T09:30:00"),
                completed: false,
            },
            {
                id: 2,
                title: "AAAAAAAAAAAAAA",
                due: new Date("2021-01-31T09:30:00"),
                completed: false,
            }
        ]
    };

    const [todoList, setTodoList] = useState(testTodos);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Todo Application</h1>
                <TodoList props={todoList} update={setTodoList} />
                <NewTodo props = {todoList} update={setTodoList} />
            </header>
        </div>
    );
}

export default App;
