const passport = require("passport");
const LocalStrategy = require("passport-local");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("./models/user");
const jwt = require("jsonwebtoken");
const config = require("./config/default");

exports.local = passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = user => {
  return jwt.sign({user} , config.secret, { expiresIn: 36000 });
};

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secret;

exports.jwtPassport = passport.use(new JwtStrategy(opts, 
    (jwt_payload, done) => {
        User.findOne({_id: jwt_payload.user._id}, (err, user) => {
            if(err) return done(err, false);
            if(user) return done(null, user);
            return done(null,false);
        });
    }
));

exports.verifyUser = passport.authenticate('jwt', {session: false});

