https://learn.nestjs.com/courses/591712/lectures/23192389

- Statistics:
  - Start: 21:18:00
  - End: 20:51:00
  - Total: 00:15:00
  - Video: 00:04:37
  - Study time to video time ratio: 3/1

</br>

- Data Validation
  - It is a common best practice for any back-end to validate the correctness of data being sent into our application;
  - It is more ideal if we can automatically validate these incoming requests;
  - NestJS provides a validation pipe to solve this issue;
  - Validation pipe provides a convenient way of enforcing validation rules for all incoming client payload;
  - It is possible to specify these rules by using an annotation in the DTO;
  - First it is necessary to setup the application to use the validation pipe;
  - Help us define the interfaces for the input and output within our system;
  - Ex.: with DTOs we can define the shape or interface of what we are expecting to receive for the body in a POST request;
  - (terminal) Add DTO to specify the shape of the body for creating a new coffee: `nest g class coffees/dto/create-coffee.dto --no-spec --flat`;
  - (terminal) Use the cli help to check options for CLI commands: `nest g class --help`;
