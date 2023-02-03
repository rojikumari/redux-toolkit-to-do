import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const AddTodo = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const onSubmit = (event) => {
		event.preventDefault();
		if(value.trim().length === 0){
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}
		dispatch(
			addTask(value)
		);
		setValue("");
	};
	return (
		<form className="add-todo">
			<input
				type="text"
				className="task-input"
				placeholder="Add Item"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			
			></input>

			<button type='submit' className="task-button" onClick={onSubmit}>
				Add
			</button>
		</form>
	);
};

export default AddTodo;
