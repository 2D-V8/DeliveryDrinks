const User = require('../models/user');

module.exports = {
    register(req, res) {
        const user = req.body; // Capturamos los datos que envia el usuario
        User.create(user, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Se genero un error con el registro del usuario',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'Se realizo el registro correctamente',
                data: data //id del nuevo usuario registrado.
            });
        });
    }
}