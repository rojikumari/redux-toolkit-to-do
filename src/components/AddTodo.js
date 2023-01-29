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
			addTask({
				task: value
			})
		);
		setValue("");
	};
	const handleKeyPress = (event) => {
		if(event.key === 'Enter'){
			dispatch(
				addTask({
					task: value
				})
			);
			setValue("");
		}
	}
	return (
		<div className="add-todo">
			<input
				type="text"
				className="task-input"
				placeholder="Add Item"
				value={value}
				onChange={(event) => setValue(event.target.value)}
				onKeyPress={handleKeyPress} 
			></input>

			<button className="task-button" onClick={onSubmit}>
				Add
			</button>
		</div>
	);
};

export default AddTodo;
