const app = require('./config/server');
require('./app/ruta/rutas')(app);


app.listen(app.get('port'), ()=> console.log(`Servidor Corriendo en ${app.get('port')}`));