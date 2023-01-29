https://learn.nestjs.com/courses/591712/lectures/23193761

- Statistics:
  - Start: 19:56
  - End:

</br>

- Entity;
  - Represents a relationship between a TypeScript class and a database table;
  - In NestJS applications the entities are classes decorated with the @Entity decorator;
  - In the `TypeOrmModule.forRootAsync` module, the `synchronize` attribute lets TyeORM automatically generate a SQL table for all classes with the `@Entity` decorator and the metadata they contain; This automatic synchronization saves a lot of manual coding that would have to be done otherwise while developing applications; This is designed for `development` only and should always be disabled in production environments.
