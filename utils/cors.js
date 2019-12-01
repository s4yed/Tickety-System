const express = require('express');
const cors = require('cors');

// Whitelist for URLs that are able to connect to the API
const whitelist = ['http://localhost:3000', 'http://localhost:3443'];
const corsOptionsDelegate = (req, callback) => {
    // Create Cross Origin Resourse Sharing object
    var corsOptions;

    // Check if the origin URL is in our whitelist or not
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    } else {
        corsOptions = { origin: false };
    }

    // Callback with options that has been configured
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);
