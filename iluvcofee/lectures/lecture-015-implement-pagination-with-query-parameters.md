https://learn.nestjs.com/courses/591712/lectures/18346823

- Ratio: 8/1 (total time to video time);

- In most applications we need to be able to interact with large datasets;
- Without pagination, a simple search could return millions of rows;
- With pagination we can split massive data responses into manageable chunks or pages;
- As best practices:
  - Use path parameters to identify specific resource;
  - Use query parameters to filter or sort that resource;
- @Query decorator:
  - NestJS has a decorator for getting all or a specific portion of the query parameters called @Query();
  - It works similarly to @Params() and @Body() decorators;
