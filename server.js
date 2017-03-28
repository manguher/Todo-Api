var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = []
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function(req, res){

	res.send('Todo Api root');
});

app.listen(PORT,function(){
	console.log('Express listening on port ' + PORT + '!')
})

// GET /todo
app.get('/todos', function(req, res){
	res.json(todos);
});

// GET /todo/:id

app.get('/todos/:id', function(req, res){
	var todoId = parseInt(req.params.id,10);
	var matchTodo;
	todos.forEach(function(todo){
		if(todoId === todo.id){
			matchTodo = todo;
		}
	});

	if(matchTodo){
		res.json(matchTodo);
	}
	else{
		res.status(404).send();
	}
})


// Post /todos

app.post('/todos', function(req, res){
	var body = req.body;
	body.id = todoNextId++;
	todos.push(body);
	res.json(body);
});


