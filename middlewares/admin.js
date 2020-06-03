const verifyAdmin =(req, res, next) => {

    const nombreAVerificar = req.query.user;
    const listadoNombresAdmitidos = ['Ada', 'Greta', 'Vim', 'Tim'];

    const nombreValido = listadoNombresAdmitidos.find(user => {return user == nombreAVerificar});
    if(!nombreValido) { 
        return res.send('No tiene los privilegios para ingresar');
    }

    req.nombreAdmin = nombreAVerificar;

    next();

}

module.exports = {verifyAdmin};