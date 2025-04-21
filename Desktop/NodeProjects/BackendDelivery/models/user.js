const db = require("../config/config"); // Ensure this path is correct
const bcrypt = require("bcryptjs");

const User = {};

// Modify findById to return a single object or null
User.findById = (id, result) => {
    const sql = `
    SELECT
        id, name, birthdate, document, email, password,
        created_at, updated_at
    FROM
        users
    WHERE
        id = ?
    `; // Added id, created_at, updated_at

    db.query(
        sql,
        [id],
        (err, users) => { // Renamed parameter to 'users' to indicate it's an array
            if (err) {
                console.error("DATABASE ERROR:", err); // Use console.error
                return result(err, null);
            }
            // Check if any rows were returned and return the first one
            if (users.length > 0) {
                console.log("Usuario encontrado (findById):", users[0]);
                return result(null, users[0]); // Return the first user object
            } else {
                console.log("Usuario no encontrado (findById):", id);
                return result(null, null); // Return null if no user found
            }
        }
    );
};


// Modify findByEmail to return a single object or null
User.findByEmail = (email, result) => {
    const sql = `
    SELECT
        id, name, birthdate, document, email, password,
        created_at, updated_at
    FROM
        users
    WHERE
        email = ?
    `; // Added id, created_at, updated_at

    db.query(
        sql,
        [email],
        (err, users) => { // Renamed parameter to 'users' to indicate it's an array
            if (err) {
                console.error("DATABASE ERROR:", err); // Use console.error
                return result(err, null);
            }
             // Check if any rows were returned and return the first one
            if (users.length > 0) {
                console.log("Usuario encontrado (findByEmail):", users[0]);
                return result(null, users[0]); // Return the first user object
            } else {
                console.log("Usuario no encontrado (findByEmail):", email);
                return result(null, null); // Return null if no user found
            }
        }
    );
};

User.create = async (user, result) => {
// se agrega logica para encryptar contraseña en hash
    const hash = await bcrypt.hash(user.password, 10);

    const sql = `
    INSERT INTO
        users(
            name,
            birthdate,
            document,
            email,
            password,
            created_at,
            updated_at
        )
    VALUES(?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(
        sql,
        [
            user.name,
            user.birthdate,
            user.document,
            user.email,
            hash,
            new Date(),
            new Date()
        ],
        (err, res) => { // 'res' here is the query result, not the express response
            if (err) {
                console.error("DATABASE ERROR:", err); // Use console.error
                return result(err, null);
            } else {
                console.log("ID del nuevo usuario:", res.insertId);
                return result(null, res.insertId); // Return the insertId
            }
        }
    );
};

module.exports = User;