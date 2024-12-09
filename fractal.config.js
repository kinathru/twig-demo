'use strict';

const fractal = module.exports = require('@frctl/fractal').create();
const twigAdapter = require('@frctl/twig')();

// Project title
fractal.set('project.title', 'Twig Component Library');

// Components configuration
fractal.components.engine(twigAdapter);
fractal.components.set('ext', '.twig');
fractal.components.set('path', __dirname + '/src/components');
fractal.components.set('default.preview', '@preview');

// Documentation configuration
fractal.docs.set('path', __dirname + '/docs');

// Web UI configuration
fractal.web.set('builder.dest', __dirname + '/styleguide');
fractal.web.set('static.path', __dirname + '/public');

// Theme customization (optional)
const mandelbrot = require('@frctl/mandelbrot');
const myCustomisedTheme = mandelbrot({
    skin: 'black',
    styles: ['default', '/css/main.css']
});

fractal.web.theme(myCustomisedTheme);
