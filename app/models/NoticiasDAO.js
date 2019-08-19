function NoticiasDAO(connection){
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
	this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
	this._connection.query('insert into noticias set ?', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

NoticiasDAO.prototype.buscarNoticias = function(pesquisa, callback){
	this._connection.query('select * from noticias where titulo like ?', '%' + pesquisa + '%', callback);
}

NoticiasDAO.prototype.excluirNoticia = function(id_noticia, callback){
	this._connection.query('delete from noticias where id_noticia =' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.editarNoticia = function(noticia, callback){
	this._connection.query('update noticias set titulo =' + noticia.titulo +', descricao = '+ noticia.descricao +', autor = '+ noticia.autor +', noticia = '+ noticia.noticia +' where id_noticia = '+ noticia.id_noticia, callback);
}

NoticiasDAO.prototype.mostrarNoticia = function(id_noticia, callback){
	this._connection.query('select * from noticias where id_noticia =' + id_noticia, callback);
}

module.exports = function(){
	return NoticiasDAO;
}