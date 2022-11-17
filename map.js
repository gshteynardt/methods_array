import { todos } from './const.js';

const todosInfo = todos.map(todo => {
  return { id: todo.id, title: todo.title };
});

console.log(todosInfo);
