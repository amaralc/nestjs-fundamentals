https://learn.nestjs.com/courses/591712/lectures/23192390

- Statistics:
  - Start: 22:19:00
  - End: 22:32:00
  - Total: 00:13:00
  - Video: 00:03:01
  - Study time to video time ratio: 4/1

</br>

- How to ensure that the payloads come in the shape we expect them to be?
  - Using the transform property of the ValidatorPipe;
    - Class type conversions
      - Convert objects into instances of the expected dto class;
    - Primitive type conversions:
      - Convert strings (every path parameter come as string) into certain data types (ex.: 'true' into true);
  - Be aware that this feature may slightly impact performance;
