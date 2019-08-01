var app = require('./config/server');

// var rotaNoticias = require('./app/routes/noticias') (app);

// var rotaHome = require('./app/routes/home') (app);

// var rotaFormAddNoticia = require('./app/routes/form_add_noticia') (app);

app.set('view engine', 'ejs');

app.listen(3000, function(){
	console.log('Servidor ON');
});