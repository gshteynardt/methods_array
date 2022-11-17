import { todos } from './const.js';

const todosMap = todos.reduce((acc, todo) => {
  acc[todo.id] = todo;
  return acc;
}, {});

const map = {
  '1': {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  '2': {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
};

const TODO_ID = 5;
console.log(todosMap[TODO_ID]);