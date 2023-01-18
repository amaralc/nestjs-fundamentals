# Lectures

- [32 - Retrieve Entities with their Relations](#lecture-32-retrieve-entities-with-their-relations)
- [33 - Using Cascading Inserts and Updates](#lecture-33-using-cascading-inserts-and-updates)
- [33 - Adding Pagination](#lecture-34-adding-pagination)

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
