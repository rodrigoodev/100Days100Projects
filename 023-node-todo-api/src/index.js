const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find((x) => x.username === username)
  
  if(!user){
    return response.status(400).send({error : "usuário não encontrado"})
  }

  request.user = user;

  return next();
}

app.post('/users', (request, response) => {
  const { name, username } = request.body;

  const userAlreadyExists = users.some( (user) => user.username == username)

  if(userAlreadyExists){
    return response.status(400).json({error: "Usuário já existe"})
  }

  const user = {
    id: uuidv4(),
    name,
    username,
    todos: []
  }

  users.push(user)

  return response.json(user)
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const { user } = request;

  return response.json(user.todos)
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { title, deadline} = request.body;

  const { user } = request;

  const newTodo = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  }

  user.todos.push(newTodo)

  return response.status(201).json(newTodo)
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { user } = request

  const { id } = request.params

  const { title, deadline} = request.body

  const todo = user.todos.find( x => x.id == id)

  if(!todo){
    return response.status(404).send({error: "Todo não encontrado"})
  }

  todo.deadline = new Date(deadline);
  todo.title = title
  
  return response.status(200).json(todo)

});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { user } = request

  const { id } = request.params

  const todo = user.todos.find( x => x.id == id)

  if(!todo){
    return response.status(404).send({error: "Todo não encontrado"})
  }

  todo.done = true;
  
  return response.status(200).json(todo)
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { user } = request

  const { id } = request.params

  console.log(id)

  const todo = user.todos.find( x => x.id == id)

  if(!todo){
    return response.status(404).send({error: "Todo não encontrado"})
  }

  user.todos.splice(todo, 1)

  return response.status(204).send()

});

module.exports = app;