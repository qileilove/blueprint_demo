var express = require('express');
var app = express();

app.get('/notes/68a5sdf67', function(request, response) {
	response.json({
		id: 1,
		title: "Grocery list",
		body: "Buy milk"
	});
});

app.get('/notes', function(request, response) {
	response.json([{
		id: 1,
		title: "Grocery list",
		body: "Buy milk"
	}, {
		id: 2,
		title: "TODO",
		body: "Fix garage door"
	}]);
});
app.get('/users/:id', function (req, res) {
    res.json(
        {
            "id":req.params.id,
            "name":"seven",
            "desc":"for test"
        }
    );  });
  
var server = app.listen(8089);