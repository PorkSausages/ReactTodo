import { Checkbox } from "@mui/material";
import React from "react"
import { useState } from "react";

export interface ITodo {
    id: number;
    title: string;
    due: Date;
    completed: boolean;
};

const Todo: React.FC<{ id: number, title: string, due: Date, completed: boolean, update: Function }> = ({ id, title, due, completed, update }) => {
    const todo: ITodo = {
        id,
        title,
        due,
        completed,
    };

    const [todoState, updateState] = useState(todo);

    const handleClick = () => {
        todoState.completed = !todoState.completed;
        updateState(todoState);
        update(todoState.id, todoState)
    };

    const className = completed ? "todo completed" : "todo";

    return (
        <span className={className}>
            <Checkbox checked={todoState.completed} onChange={handleClick} />
            <p>{title}</p>
            <p className="due-date">{due.toUTCString()}</p>
        </span>
    )
}

export { Todo }