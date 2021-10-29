# TwentyFortyEight

Move and join the numbers with arrow keys. Get to 2048!

## Roadmap

Refactor field in field.service to be a one dimensional array.
This array should contain a type 'tileInfo' that includes: value, x, y, previousX, previousY.
A new tile component should be responsible of dispaying 'tileInfo'.
x, y, previousX, previousY should be bassed to animations.ts to calculate animation.

Add component for messages, "won"/"game over"

## Development info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
