# AngularWebvrDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.2. In this project I will use different tutorials to learn how to create a WebVR application using Angular 9. 

## Installation and Usage
At the time of this writing,  [aframe-google-poly-component v1.1.0](https://github.com/mattrei/aframe-google-poly-component) in this project will fail if you install the package from npm. I currently have two issues that I am tracking to be able to get a new release. One issue is the LegacyGLTFLoader was removed from three.js leaving only support for GLTF2 3D objects and not GLTF format as I understand it. 

Get an API Key to in order to use the [Google Poly API](https://developers.google.com/poly/develop/web). Insert your key into the `apiKey` property.

Visit the [README](https://github.com/mattrei/aframe-google-poly-component#readme) for more information on how to use the `aframe-google-poly-component`.

install dependencies:
navigate to project root directory, then type 
```bash
   npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
