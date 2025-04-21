const User = require("../models/user");
const bcrypt = require("bcryptjs");//hash password
const jwt = require("jsonwebtoken"); //login token
const keys = require("../config/keys"); 

module.exports = {

    async login(req, res) { 
        const email = req.body.email;
        const password = req.body.password;

        User.findByEmail(email, async (err, myUser) => { 

            if(err){
                console.log("ERROR:", err);
                result(err, null);
            }
            else{
                console.log("Usuario obtenido", user); 
                result(null, user); 
            }
        
    

            if (!myUser) {
                return res.status(401).json({
                    success: false,
                    message: "El email no fue encontrado",
                });
            }

            const isPasswordValid = await bcrypt.compare(password, myUser.password);

            if (isPasswordValid) {
                const token = jwt.sign({
                    id: myUser.id,
                    email: myUser.email
                }, keys.secretOrKey, {});

                const data = {
                    id: myUser.id,
                    name: myUser.name,
                    email: myUser.email,
                    Fecha_Nacimineto: myUser.birthdate,
                    CC: myUser.document,
                    
                    session_token: `JWT ${token}`
                };

                return res.status(201).json({
                    success: true,
                    message: "Usuario autenticado", 
                    data: data
                });

            } else { 
                return res.status(401).json({
                    success: false,
                    message: "Contraseña incorrecta",
                });
            }

        });

    },

    register(req, res) {
        const user = req.body; //capturar datos del cliente
        User.create(user, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: "Hubo un error con el registro del usuario",
                    error: err
                });
            }

            return res.status(201).json({
                success: true, 
                message: "El registro se realizo de manera exitosa", 
                data: data 
            });
        });
    }
}