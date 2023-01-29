# Index

- ## Creating a REST API application

- ## Add PostgreSQL with TypeORM

  - [Lecture 32: Retrieve Entities with their Relations](#lecture-32-retrieve-entities-with-their-relations)
  - [Lecture 33: Using Cascading Inserts and Updates](#lecture-33-using-cascading-inserts-and-updates)
  - [Lecture 34: Adding Pagination](#lecture-34-adding-pagination)
  - [Lecture 35: Using Transactions](#lecture-35-using-transactions)
  - [Lecture 36: Adding Indexes to Entities](#lecture-36-adding-indexes-to-entities)
  - [Lecture 37: Setting Up a Migration](#lecture-37-setting-up-migrations)

- ## Dependency Injection

- ## Application Configuration

- ## Other Building Blocks by Example

- ## Generating Open API Specification

  - [Lecture 70: Generating Open API specification](#lecture-70-generating-open-api-specification)
  - [Lecture 71: Enabling CLI Plugin](#lecture-71-enabling-cli-plugin)

- ## Testing

- ## Add MongoDB with Mongoose

</br>
</br>
</br>

# Lectures

## Lecture 32: Retrieve entities with their relations

https://learn.nestjs.com/courses/591712/lectures/23193767

- Statistics:
  - Start: 14:09
  - End:

</br>

- Relations
  - Relations are not eagerly loaded by default;
  - We have to specify which relations we want to be resolved when calling the find method on the repository;

## Lecture 33: Using Cascading Inserts and Updates

https://learn.nestjs.com/courses/591712/lectures/23193769

- Statistics:
  - Start: 15:14
  - End:

</br>

- Insert relations together with the main entity;
- Promise.all
  - Use await Promise.all "to wait until the entire array of promises finishes before executing for their code";

## Lecture 34: Adding Pagination

https://learn.nestjs.com/courses/591712/lectures/23193770

</br>

- Use class transformer to parse url information as a specific data type, such as numbers;
  - e.g.: `@Type(() => Number)`;
- Use `transformOptions` in the `ValidationPipe` to customize data transformations in a global level;

  - e.g.:

  ```json
    "transformOptions": {
      // With this option set to true, we no longer need to specify types with the @Type decorator;
      "enableImplicitConversion": true,
    },
  ```

## Lecture 35: Using Transactions

https://learn.nestjs.com/courses/591712/lectures/23193771

</br>

- Database transactions;

  - Symbolizes a unit of work performed within a data management system;
  - A reliable way to accomplish multiple tasks independent of other transactions;

- Transactions and TypeORM;
  - There are many different strategies to handle TypeORM transactions but this course recommends using the QueryRunner class because it gives full control over the transaction;
    - Obs.: A query runner, run queries on a single database connection
    - https://typeorm.delightful.studio/interfaces/_query_runner_queryrunner_.queryrunner.html
    - https://orkhan.gitbook.io/typeorm/docs/query-runner
  - There are other complex and advanced techniques to achieve this which leverage Nest scope providers and interceptors to automatically wrap every write query in the transaction, but these techniques are covered in other advanced NestJS courses in the future;

## Lecture 36: Adding Indexes to Entities

https://learn.nestjs.com/courses/591712/lectures/23241320

</br>

Indexes can add to our application both rapid random lookups and efficient access of ordered records.
Use them whenever performance is vitally important for a certain entity;

## Lecture 37: Setting Up Migrations

https://learn.nestjs.com/courses/591712/lectures/23241322

</br>

Database migrations provides a way to incrementally update our database schema and keep it in sync with the application's data model, all while preserving existing data in our database.

To create a new migration using TypeOrm, we can type:

`npx typeorm migration:create src/migrations/CoffeeRefactor`

After creating the migration and adding content to the up and down methods, build the application so that TypeORM CLI can find the entities and migrations.

`npm run build` or `yarn build`;

After the build is complete, run the migrations:

// Run migration(s)
`npx typeorm migration:run -d dist/typeorm-cli.config`

// REVERT migration(s)
npx typeorm migration:revert -d dist/typeorm-cli.config

// Let TypeOrm generate migrations (for you)
npx typeorm migration:generate src/migrations/SchemaSync -d dist/typeorm-cli.config

## Lecture 70: Generating Open API specification

https://learn.nestjs.com/courses/591712/lectures/23275307

</br>

One of the best ways to document our application is to use the OpenAPI specification. The OpenAPI specification is a language-agnostic definition format used to describe RESTful APIs.

An OpenAPI document allows us to describe our entire API, including:

- Available operations (endpoints);
- Operation parameters: Input and output for each operation;
- Authentication methods;
- Contact information, license, terms of use and other information;
- ... and much more;

In order to use it with NestJS

- (terminal) Install @nestjs/swagger;
- (terminal) Install Swagger UI for express (default for nest applications), or fastify (if you have configured nest to use it);
  - Swagger UI for express: `swagger-ui-express`;
  - Swagger UI for fastify: `fastify-swagger`;
  - `yarn add @nestjs/swagger swagger-ui-express`;

## Lecture 71: Enabling CLI Plugin

https://learn.nestjs.com/courses/591712/lectures/23275309

</br>

- What shape of object is expected by a specific POST action in order to successfully add a new coffee if we don't have any information provided in the Swagger UI?

  - The dedicated CreateCoffeeDto class is not enough to automatically generate the open API schemas out of the box;
  - TypeScript's metadata reflection system has several limitations which make it impossible, for instance, to determine what properties what class consists of, or recognize wether a given property is optional or required.
  - Some of these constraints can be addressed at compilation time;
  - Nest provides a plugin that enhances the TypeScript compilation process to produce the amount of boiler plate code we'd be required to create in order to tackle this problem.

    - This plugin is opt in;
    - If you prefer you can declare all of the swagger decorators manually, or add specific decorators wherever you need to override the basic functionality provided by the plugin;
    - To enable this new Swagger CLI plugin, open the nest cli json file and add the `compilerOptions` property as described bellow;

    ```json
    {
      "$schema": "https://json.schemastore.org/nest-cli",
      "collection": "@nestjs/schematics",
      "sourceRoot": "src",
      "compilerOptions": {
        "deleteOutDir": true,
        "plugins": ["@nestjs/swagger/plugin"]
      }
    }
    ```

    - Rerun the project;
    - Access `localhost:3000/api`;
    - Verify that the Swagger ui now reflects the `CreateCoffeeDto` with all of its properties for the request body of the create coffee POST endpoint;
    - For `DTOs` that use Partial type:
      - Switch
        - `import { PartialType } from '@nestjs/mapped-types'`;
      - By
        - `import { PartialType } from '@nestjs/swagger'`;
    - With that change, we achieve the same functionality while instructing swagger that the properties are optional;
