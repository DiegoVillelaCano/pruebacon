const conn = require ('../../config/database');
let usuariox;
module.exports = (app) => {
      //Estudiantes
    app.post('/estudiante', (req, res ,next) => {
        let query = "INSERT INTO estudiantes(nombre, telefono, correo) VALUES ('"+ req.body.nombre +"','"+ req.body.telefono + "','"+ req.body.correo +"')";
        conn.query(query,(err, rows, cols) => {
            if(err){res.status(404).json({status: 0, mensaje: "estudiante no Guardado"});}
            else {res.json({status: 1, message: "estudiante Registrado con Exito"});}
        });
    });

    app.get('/estudiantes', (req, res, next) =>{
        let query = "SELECT * FROM estudiantes"
        conn.query(query, (err, rows, cols) => {
            if (err) {res.status(404).json({status: 0, mensaje: "Error"});}
            else{res.json({status: 1, message: "estudiantes guardados", estudiantes: rows });}
        });
    });

    app.delete('/estudiantes/:id', (req, res ,next) => {
        let query = "DELETE FROM estudiantes WHERE id = "+ req.params.id;
        conn.query(query, (err, rows, cols) => {
            if (err) {res.status(404).json({status: 0, mensaje: "Error"});}
            else{res.json({status: 1, message: "estudiante eliminado", estudiantes: rows });}  
            
        });
    });

    app.put('/estudiantes/:id', (req, res ,next) => {
        let query = "UPDATE estudiantes SET nombre = '"+ req.body.nombre + "' , telefono ='"+ req.body.telefono + "', correo='"+ req.body.correo + "' where id = " + req.params.id;
        conn.query(query,(err, rows, cols) => {
            if(err){res.status(404).json({status: 0, mensaje: "Error"});}
            else {res.json({status: 1, message: "estudiante modificado"});}
        });
    });

     //profesores
     app.post('/maestros', (req, res ,next) => {
        let query = "INSERT INTO profesores(nombre, telefono, correo) VALUES ('"+ req.body.nombre +"','"+ req.body.telefono + "','"+ req.body.correo +"')";
        conn.query(query,(err, rows, cols) => {
            if(err){res.status(404).json({status: 0, mensaje: "profesor no Guardado"});}
            else {res.json({status: 1, message: "profesor Registrado con Exito"});}
        });
    });

    app.get('/maestros', (req, res, next) =>{
        let query = "SELECT * FROM profesores"
        conn.query(query, (err, rows, cols) => {
            if (err) {res.status(404).json({status: 0, mensaje: "Error"});}
            else{res.json({status: 1, message: "profesores guardados", profesores: rows });}
        });
    });

    app.delete('/maestros/:id', (req, res ,next) => {
        let query = "DELETE FROM profesores WHERE id = "+ req.params.id;
        conn.query(query, (err, rows, cols) => {
            if (err) {res.status(404).json({status: 0, mensaje: "Error"});}
            else{res.json({status: 1, message: "profesores eliminado", profesores: rows });}  
            
        });
    });

    app.put('/maestros/:id', (req, res ,next) => {
        let query = "UPDATE profesores SET nombre = '"+ req.body.nombre + "' , telefono ='"+ req.body.telefono + "', correo='"+ req.body.correo + "' where id = " + req.params.id;
        conn.query(query,(err, rows, cols) => {
            if(err){res.status(404).json({status: 0, mensaje: "Error"});}
            else {res.json({status: 1, message: "profesores modificado"});}
        });
    });

     //	materias
     app.post('/cursos', (req, res ,next) => {
        let query = "INSERT INTO materias(nombrecurso, creditos, horario,idprofesor,fechacreacion) VALUES ('"+ req.body.nombrecurso +"','"+ req.body.creditos + "','"+ req.body.horario +"','"+ req.body.idprofesor +"','"+ req.body.fechacreacion +"')";
        conn.query(query,(err, rows, cols) => {
            if(err){res.status(404).json({status: 0, mensaje: "materias no Guardado"});}
            else {res.json({status: 1, message: "materias Registrado con Exito"});}
        });
    });

    app.get('/cursos', (req, res, next) =>{
        let query = "SELECT * FROM materias"
        conn.query(query, (err, rows, cols) => {
            if (err) {res.status(404).json({status: 0, mensaje: "Error"});}
            else{res.json({status: 1, message: "materias guardados", materias: rows });}
        });
    });

    app.delete('/cursos/:id', (req, res ,next) => {
        let query = "DELETE FROM materias WHERE id = "+ req.params.id;
        conn.query(query, (err, rows, cols) => {
            if (err) {res.status(404).json({status: 0, mensaje: "Error"});}
            else{res.json({status: 1, message: "materia eliminado", materias: rows });}  
            
        });
    });

    app.put('/cursos/:id', (req, res ,next) => {
        let query = "UPDATE materias SET nombrecurso = '"+ req.body.nombrecurso + "' , creditos ='"+ req.body.creditos + "',  horario='"+ req.body. horario + "', idprofesor ='"+ req.body.idprofesor + "', fechacreacion ='"+ req.body.fechacreacion + "' where id = " + req.params.id;
        conn.query(query,(err, rows, cols) => {
            if(err){res.status(404).json({status: 0, mensaje: "materias no Guardado"});}
            else {res.json({status: 1, message: "materia modificada"});}
        });
    });

     //	asignacion
     app.post('/asignacion', (req, res ,next) => {
        let query = "INSERT INTO asignacion(idmateria, idestudiante) VALUES ('"+ req.body.idmateria +"','"+ req.body.idestudiante + "')";
        conn.query(query,(err, rows, cols) => {
            if(err){res.status(404).json({status: 0, mensaje: "asignacion no Guardado"});}
            else {res.json({status: 1, message: "asignacion Registrado con Exito"});}
        });
    });

}