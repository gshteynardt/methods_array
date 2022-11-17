import { todos } from './const.js';

const checkCompleted = todo => todo.completed;

const isCompleted = todos.some(checkCompleted);
console.log({ isCompleted });
