# RioTrainingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.

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

# App Setup

## 00-setup-angular-material

Since I am using the angular cli to generate this project, we are able to use the below command to setup Angular Material

```
ng add @angular/material
```

If succesfull, you should see the following in your console:

```
UPDATE src/main.ts (391 bytes)
UPDATE src/app/app.module.ts (502 bytes)
UPDATE angular.json (4149 bytes)
UPDATE src/index.html (482 bytes)
UPDATE src/styles.scss (181 bytes)
```

## create NavBar module

We want to create a component to handle our nav bar, using the CLI we can use the command

```
ng generate module shared/navbar --module=app --flat=false
```

This will:

- CREATE src/app/shared/navbar/navbar.module.ts
- UPDATE src/app/app.module.ts

If we had used `--flat=true`, it would have created the `navbar.module.ts` in the shared folder, and not in a sub-folder.

## create NavBar Component

```
ng generate component shared/navbar/components/navbar --module=navbar --flat=false
```

- CREATE src/app/shared/navbar/components/navbar/navbar.component.scss
- CREATE src/app/shared/navbar/components/navbar/navbar.component.html
- CREATE src/app/shared/navbar/components/navbar/navbar.component.spec.ts
- CREATE src/app/shared/navbar/components/navbar/navbar.component.ts
- UPDATE src/app/shared/navbar/navbar.module.ts

# template basics
