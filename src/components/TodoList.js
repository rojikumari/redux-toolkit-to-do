import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";
const TodoList = () => {
	const {todo} = useSelector((state)=> state.tasks)
	const dispatch = useDispatch();
	return (
		<ul className="tasks-list">
			{todo.map((todo,i) => (
				<li key={i} className="task-item">
					<div>
						{todo }
					</div>
					<div>
						<button className="remove-task-button" onClick={()=>{
							dispatch(deleteTask({id: i}))
						}}>Delete</button>
					</div>
		       </li>
			))}
		</ul>
	);
};

export default TodoList;
