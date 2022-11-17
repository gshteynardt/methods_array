import { todos } from './const.js';
import { nums } from './const.js';

const TODO_ID = 5;
const finder = todo => todo.id === TODO_ID;
const todo = todos.find(finder);



