const JwtStategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const keys = require("./keys");
const User =require("../models/user");

module.exports = (passport) => {
    let opts ={};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = keys.secretOrKey;

    passport.use(new JwtStategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id, (err, User) => {
            if (err){
                return done (err, false);

            }
            if (user){
                return done(null, user);

            }
            else {
                return done (null,false)
            }

        });

    }));
}