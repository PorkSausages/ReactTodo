import { Button, Dialog, DialogContent, DialogTitle, Fab, Icon } from "@mui/material"
import React, { ChangeEvent, KeyboardEvent, useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import DateAdapter from "@mui/lab/AdapterMoment";
import { DesktopDateTimePicker, LocalizationProvider } from "@mui/lab";
import moment, { Moment } from "moment";
import { ITodoListProps } from "./TodoListComponent";
import { ITodo } from "./TodoComponent";


const NewTodo: React.FC<{ props: ITodoListProps, update: Function }> = ({ props, update }) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [newTodoTitle, setNewTodoTitle] = useState("");
    const [newTodoDue, setNewTodoDue] = useState(moment())

    const handleNewTodoClick = () => {
        setNewTodoDue(moment());
        setNewTodoTitle("");
        setDialogOpen(true);
    }

    const updateState = () => {
        const newId = props.todos.length + 1;
        const newTodo: ITodo = {
            id: newId,
            title: newTodoTitle,
            due: newTodoDue.toDate(),
            completed: false
        };

        let newState: ITodoListProps = {
            todos: props.todos.map(todo => {
                return todo;
            })
        };
        newState.todos.push(newTodo);

        update(newState);
    }

    const createNewTodo = () => {
        if (newTodoTitle != "") { updateState() }
        setDialogOpen(false);
    }

    return (
        <div className={"new-todo-dialog"}>
            <Dialog open={dialogOpen}>
                <DialogTitle>New Todo</DialogTitle>
                <LocalizationProvider dateAdapter={DateAdapter}>
                    <DialogContent>
                        <div className="new-todo-container">
                            <div className="text-field-padding">
                                <TextField
                                    id="new-todo-title"
                                    label="Title"
                                    variant="outlined"
                                    onChange={(newValue) => {
                                        setNewTodoTitle(newValue.currentTarget.value);
                                    }}
                                />
                            </div>
                            <DesktopDateTimePicker
                                value={newTodoDue}
                                onChange={(newValue: any) => {
                                    setNewTodoDue(newValue);
                                }}
                                renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} />}
                            />
                            <div className="add-todo-button">
                                <Button variant="contained" onClick={createNewTodo}>Add</Button>
                                <Button variant="outlined" onClick={() => { setDialogOpen(false); }}>Cancel</Button>
                            </div>
                        </div>
                    </DialogContent>
                </LocalizationProvider>
            </Dialog>
            <div className="new-todo-button">
                <Fab color="primary" aria-label="add" onClick={handleNewTodoClick}>
                    <AddIcon />
                </Fab>
            </div>
        </div>
    )
}

export default NewTodo;