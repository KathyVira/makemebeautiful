const passport = require('passport');
const GoogleStratedy = require('passport-google-oauth20');
const keys = require('../config/keys');

passport.use(
    new GoogleStratedy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',

        },
        (accessToken, refreshToken, profile, done) => {
            console.log('accessToken:', accessToken);
            console.log('refreshToken:', refreshToken);
            console.log('profile:', profile);
        }
    )
);