import React from 'react';
// import TodoItem from './TodoItem';
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";
const TodoList = () => {
	const todos = useSelector((state)=> state.tasks);
	const dispatch = useDispatch();
	return (
		<ul className="tasks-list">
			{todos.map((todo) => (
				<li className="task-item">
					<div>
						{todo.name }
					</div>
					<div>
						<button className="remove-task-button" onClick={()=>{
							dispatch(
								deleteTask({
									id: todo.id
								})
	                     	)
						}}>Delete</button>
					</div>
		       </li>
			))}
		</ul>
	);
};

export default TodoList;
