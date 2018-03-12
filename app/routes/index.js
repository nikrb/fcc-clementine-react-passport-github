
var path = process.cwd();
// var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');

module.exports = function (app, passport) {

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/login');
		}
	}

	// var clickHandler = new ClickHandler();

	// app.route('/')
		// .get(isLoggedIn, function (req, res) {
		// 	res.sendFile(path + '/public/index.html');
		// });

	// app.route('/login')
	// 	.get(function (req, res) {
	// 		res.sendFile(path + '/public/login.html');
	// 	});

	// app.route('/logout')
	// 	.get(function (req, res) {
	// 		req.logout();
	// 		res.redirect('/login');
	// 	});

	// app.route('/profile')
	// 	.get(isLoggedIn, function (req, res) {
	// 		res.sendFile(path + '/public/profile.html');
	// 	});

	// app.route('/api/:id')
	// 	.get(isLoggedIn, function (req, res) {
	// 		res.json(req.user.github);
	// 	});

	app.route('/test')
		.get((req, res, next) => {
			console.log("auth test fetch route");
			res.json({ success: true });
		});

	app.route('/auth/github')
		.get((req, res, next) => {
			console.log('get auth github');
			return next();
		},
		passport.authenticate('github'));

	app.route('/auth/github/callback')
    .get(
      passport.authenticate('github', { failureRedirect: 'http://localhost:3000' }),
      (req, res) => {
        // req.user gets populated by passport
        console.log('/auth/github/callback', req.user);
        res.redirect('http://localhost:3000');
      }
    );
	// app.route('/auth/github/callback')
	// 	.get(passport.authenticate('github', {
	// 		successRedirect: '/',
	// 		failureRedirect: '/'
	// 	}));

	// app.route('/api/:id/clicks')
	// 	.get(isLoggedIn, clickHandler.getClicks)
	// 	.post(isLoggedIn, clickHandler.addClick)
	// 	.delete(isLoggedIn, clickHandler.resetClicks);
};
