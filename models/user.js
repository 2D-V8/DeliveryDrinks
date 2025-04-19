const db = require("../config/config");

const User = {};

User.create = (user, result) => {
    const sql = `
    INSERT INTO
        users(
            email,
            name,
            lastname,
            phone_number,
            image,
            password,
            created_at,
            updated_at,
            fecha_nacimiento,
            documento_identidad

        )
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    
    `;
    db.query
    (
        sql,
        [
            user.email,
            user.name,
            user.lastname,
            user.phone_number,
            user.image,
            user.password,
            new Date(),
            new Date(),
            user.fecha_nacimiento,
            user.documento_identidad
        ],
        (err, res) =>{
        if(err){
            console.log("ERROR:", err);
            result(err, null)
        }   
        else{
            console.log("ID del numero usuario:", res.InsertId);
            result(null,res.InsertId);
        }
        }
    )
}
module.exports = User;
