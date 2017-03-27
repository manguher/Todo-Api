var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	descripcion: 'Juntarse con la madre',
	complete: false
}, {
	id: 2,
	descripcion: 'Ir al super',
	complete: false
}];

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


