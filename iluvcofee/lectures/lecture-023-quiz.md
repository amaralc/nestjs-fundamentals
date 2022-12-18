https://learn.nestjs.com/courses/591712/lectures/23356439

- Statistics:
  - Start: 22:36:00
  - End: 22:53:00
  - Total: 00:17:00

</br>

- In NestJS - what do Controllers do?
  - Controllers handle "Requests" in our application
  - Tie incoming requests to "paths" designated by the controller or it's HTTP methods
- How do we attach different HTTP methods to our Controllers?
  - via Decorators (ie: @Get())
- In NestJS Controllers - do "method names" mean anything? (ie: @Get() findAll())
  - No - these are merely for readability, the decorators actually tie the request to an HTTP Method
- What HTTP method Decorators are available from @nestjs/common?
  - @Get(), @Post(), @Put(), @Patch(), @Delete(), and more.
- In Controllers - how can we retrieve dynamic Parameters from a request?
  - Via the @Param() decorator;
- In Controllers - how can we retrieve the Request Body?
  - Via the @Body() decorator;
- What is the difference between a PUT and a PATCH request?
  - A PATCH request updates a resource "partially"
- How do we retrieve Query Parameters (ie: ?something=123) from a Request?
  - via the @Query() decorator;
- In NestJS - Providers (aka: Services) are used to:
  - Injecting dependencies
  - Handling business logic (instead of doing it within Controllers);
  - Responsible for data storage and retrieval
- In NestJS - Modules are a recommended best-practice as an effective way to:
  - Organize your applications components
  - Encapsulate a closely related set of capabilities
  - Determine what is privately and publicly available outside of itself (the Module)
- In NestJS Modules - where do we need to place Providers for them to be publicly accessible outside of the Module?
  - The "exports" array of the @Module
- What is a Data Transfer Object (aka DTO)?
  - An object that used to encapsulate data, and send it from one application to another
  - Interfaces for Inputs and Outputs within our system
- With the Nest CLI - How can generate something within a "specific" directory?
  - By typing out the file directories separated by slashes
  - By manually navigating to a specific directory
- With the Nest CLI - How can see an example output for a command we're typing in?
  - Using the --dry-run flag at the end will output what will happen, without actually creating anything
- In NestJS - What Pipe do we have available to validate the correctness of data being sent into our applications?
  - ValidationPipe
- What options can we pass into the ValidationPipe to help prevent malicious data from being sent into our Requests?
  - new ValidationPipe({ whitelist: true })
-
