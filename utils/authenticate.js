const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {User} = require('../models/index');
const jwt = require('jsonwebtoken');

// Use localStrategy to authenticate users
const local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Sign JWT token valid for just 50 minutes
const getToken = user => {
    return jwt.sign({user}, '0132-4567-8901-2345-6789', {
        // expiresIn: '50m',
    });
};

// JWT Strategy options to extract JWT toke from request headers
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.TOKEN_SECRET;

const jwtPassport = passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        User.findOne({_id: jwt_payload.user._id}, (err, user) => {
            if (err) return done(err, false);
            if (user) return done(null, user);
            return done(null, false);
        });
    })
);
const verifyAdmin = (req, res, next) => {
    if (!req.user.admin) {
        res.statusCode(403);
        const err = new Error('You are not authorized to perform this operation!');
        return next(err);
    } else {
        res.statusCode(200);
        return next();
    }
};

module.exports = {
    local,
    getToken,
    jwtPassport,
    verifyAdmin,
    verifyUser: passport.authenticate('jwt', {session: false})
};
