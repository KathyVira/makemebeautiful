const passport = require('passport');

module.exports = (app) => {
    //reseve the
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //sending the code
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'));

};