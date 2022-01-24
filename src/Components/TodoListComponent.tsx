import React, { useState } from "react"
import { ITodo, Todo } from "./TodoComponent"

export interface ITodoListProps {
    todos: ITodo[];
}

const TodoList: React.FC<{ props: ITodoListProps, update: Function }> = ({ props, update }) => {
    const updateTodo: Function = (id: number, todo: ITodo) => {
        let newState: ITodoListProps = { todos: [] };

        props.todos.map(oldTodo => {
            if (oldTodo.id === id) {
                const newTodo: ITodo = {
                    id,
                    title: todo.title,
                    due: todo.due,
                    completed: todo.completed
                };

                newState.todos.push(newTodo);
            } else {
                newState.todos.push(oldTodo);
            }
        });

        update(newState);
    }

    return (
        <div>
            {
                props.todos.map((todo) => {
                    return <Todo key={todo.id} id={todo.id} title={todo.title} due={todo.due} completed={todo.completed} update={updateTodo} />;
                }
            )}
        </div>
    )
};

export { TodoList }