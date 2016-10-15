var users = require('../controllers/users');
var videos = require('../controllers/videos');
var helpers = require('../helpers/helperFunctions');

var routesAPI = function(app){
	//user routes


// Add headers
		app.use(function (req, res, next) {

			// Website you wish to allow to connect
			res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

			// Request methods you wish to allow
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

			// Request headers you wish to allow
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

		// Set to true if you need the website to include cookies in the requests sent
		// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

app.post('/user/auth', users.auth);
app.get('/user/logout', helpers.isAuthenticated, users.logout);

//video routes
app.get('/videos', helpers.isAuthenticated, videos.get);
app.get('/video', helpers.isAuthenticated, videos.getOne);
app.post('/video/ratings', helpers.isAuthenticated, videos.rate);
}


module.exports = routesAPI;