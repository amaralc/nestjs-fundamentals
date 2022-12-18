https://learn.nestjs.com/courses/591712/lectures/23192389

- Statistics:
  - Start: 21:18:00
  - End: 21:34:00
  - Total: 00:16:00
  - Video: 00:07:24
  - Study time to video time ratio: 2/1

</br>

- Data Validation
  - It is a common best practice for any back-end to validate the correctness of data being sent into our application;
  - It is more ideal if we can automatically validate these incoming requests;
  - NestJS provides a validation pipe to solve this issue;
  - Validation pipe provides a convenient way of enforcing validation rules for all incoming client payload;
  - It is possible to specify these rules by using an annotation in the DTO;
  - First it is necessary to setup the application to use the validation pipe;
  - The libraries `class-validator` and `class-transformer` are used to enforce rules;
    - `class-validator`: https://github.com/typestack/class-validator
    - `class-transformer`: https://github.com/typestack/class-transformer
  - Use inheritance to pass properties and evan validation rules from DTO to DTO;
    - The library `@nestjs/mapped-types` can be used for that purpose;
