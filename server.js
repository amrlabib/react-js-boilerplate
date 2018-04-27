'use strict';
var express = require('express');
var app = new express();
var serveStatic = require('serve-static');
var path = require('path');

app.use(serveStatic('dist', {
    'index': ['index.html'],
    'dotfiles': 'ignore',
}));

app.get('/*', function(req, res) {
	res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.sendFile(path.resolve('dist/index.html'));
});


app.listen(process.env.PORT || 8080, (error) => {
    if (!error) {
        console.log(`📡  Running development server on port: ${process.env.PORT || 8080}`);
    }
});
