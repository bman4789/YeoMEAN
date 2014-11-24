YeoMEAN [![Build Status](https://travis-ci.org/bman4789/YeoMEAN.svg?branch=master)](https://travis-ci.org/bman4789/YeoMEAN)
=======

A Yeoman based, generator-angular-fullstack project.
This site is hosted by Heroku and can be accessed at [https://angular.brianm.me/](https://angular.brianm.me/)

The goal of this project is to learn and experiment with the MEAN stack. The word "YeoMEAN" is a pun combining the "Yeoman" generator and "MEAN" stack.

## Dependencies to run:

You will need node/npm as well as mongodb installed. To install other dependencies, see below:

```sh
$ npm install -g bower
$ npm install -g yo
$ npm install -g grunt
$ npm install -g generator-angular-fullstack
```

To use yo generators, see [https://github.com/DaftMonk/generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)

For example, running ```yo angular-fullstack:route testing``` from a terminal will generate a view and route titled 'testing'.

## To Develop

Run ```grunt serve``` to start node and run the web application on [http://localhost:9000](http://localhost:9000).

To run tests, run ```grunt test```.
