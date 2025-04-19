const User = require("../models/user");

module.exports = {
    register(req, res){
        const user = req.body; //capturar datos del cliente
        User.create(user, (err, data)=>{
            if (err){
                return res.status(501).json({
                    success: false,
                    message:"Hubo un error con el registro del usuario",
                    error: err
             });
            }


            return res.status(201).json({
                sucess: true,
                message:"El registro se realizo de manera existosa",
                data: data //ID DEL USUARIO

            });


        });

    }

}