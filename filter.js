import { todos } from './const.js';

const checkCompleted = todo => !todo.completed;

const filteredTodos = todos.filter(checkCompleted);
console.log(filteredTodos);
