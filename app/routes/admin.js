module.exports = function(app){
	app.get('/form_add_noticia', function(req, res){
		app.app.controllers.admin.form_add_noticia(app, req, res);
	});

	app.post('/noticias/salvar', function(req, res){
		app.app.controllers.admin.noticias_salvar(app, req, res);
	});

	app.post('/editar', function(req, res){
		app.app.controllers.admin.noticias_editar(app, req, res);
	});
}