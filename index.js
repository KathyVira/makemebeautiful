const express = require('express');
const passport = require('passport');
const GoogleStratedy = require('passport-google-oauth20');

// console.developers.google.com

const app = express();
passport.use(new GoogleStratedy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);