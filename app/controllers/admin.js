module.exports.form_add_noticia = function(app, req, res){
	res.render('admin/form_add_noticia', {validacao: {}, noticia: {}});
}

module.exports.noticias_salvar = function(app, req, res){
	var noticia = req.body;

	req.assert('titulo', 'Título é obrigatório').notEmpty();
	req.assert('descricao', 'Descrição é obrigatória').notEmpty();
	req.assert('descricao', 'Descrição deve conter entre 10 e 150 caracteres').len(10,150);
	req.assert('autor', 'Autor é obrigatório').notEmpty();
	req.assert('noticia', 'Notícia é obrigatória').notEmpty();

	var erros = req.validationErrors();

	if (erros){
		res.render('admin/form_add_noticia', {validacao: erros, noticia: noticia});
		return;
	}

	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(connection);

	noticiasModel.salvarNoticia(noticia, function(error, result){
		res.redirect('/noticias');
	});
}

module.exports.noticias_editar = function(app, req, res){
	var noticia = req.body;
	var id_noticia = req.body.id_noticia;

	req.assert('titulo', 'Título é obrigatório').notEmpty();
	req.assert('descricao', 'Descrição é obrigatória').notEmpty();
	req.assert('descricao', 'Descrição deve conter entre 10 e 150 caracteres').len(10,150);
	req.assert('autor', 'Autor é obrigatório').notEmpty();
	req.assert('noticia', 'Notícia é obrigatória').notEmpty();

	var erros = req.validationErrors();

	if (erros){
		res.render('admin/form_update_noticia', {validacao: erros, noticia: noticia});
		return;
	}

	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(connection);

	noticiasModel.editarNoticia(noticia, 
		noticiasModel.mostrarNoticia(id_noticia, function(error, result){
		res.redirect('/noticia?id_noticia =' + id_noticia);
	}));
}


