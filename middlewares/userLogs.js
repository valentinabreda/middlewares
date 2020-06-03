const fs = require('fs');

const logger = {
    dataLoger : function(req, res,next){
        fs.appendFileSync('userLogs.txt', 'El usuario ingreso a la ruta: ' + req.url +'\n');
        return next();
    }
}

module.exports = logger;