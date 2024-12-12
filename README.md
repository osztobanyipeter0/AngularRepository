# SmartHomeApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.6.

## Development server

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## To use it with the backend
To use this frontend, you have to run the backend first.

## Installation for the backend
For me it was:

-IntelliJ IDEA 2021.2.2

-Java 21

-Maven 4.0.0

Steps:
1. Clone the repository
2. Open the project in your IDE
3. Run the project. But do not try to run with mvn spring-boot:run, it will not work. You need to run the main class.

## Usage
The project is a simple REST API that allows you to manage a list of smart devices. You can create, read, update and delete devices. The API is documented with Swagger, so you can check the documentation at http://localhost:8080/swagger-ui.html

## Properties
spring.datasource.url=jdbc:postgresql://localhost:15433/postgres

spring.datasource.username=admin

spring.datasource.password=test

spring.jpa.hibernate.ddl-auto=none

More information about the properties can be found in the application.properties file.
And also check the docker-compose.yml file to see the database configuration.
