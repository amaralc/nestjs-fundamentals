https://learn.nestjs.com/courses/591712/lectures/18346824

- Statistics:

## Notes

- Services

  - Help separate business logic from controllers;
  - Helps make business logic reusable throughout multiple parts of the application;
  - Services are where the core of our business logic should be held, along with any interactions with data sources;
  - In NestJS, each service is a provider;

    - The main idea of a provider is that it can inject dependencies;
    - It means that objects can create relationships to each other and the logic of wiring up instances of objects can be handled by the nest runtime system as opposed to creating and manage this type of dependency injection yourself;
    - They look like a class annotated with a decorator called @Injectable();

    ```
      import { Injectable } from '@nestjs/common';

      @Injectable()
      export class CoffeesService {}
    ```

- (terminal) Create a service: `nest generate service`;
