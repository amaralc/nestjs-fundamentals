https://learn.nestjs.com/courses/591712/lectures/23192385

- Statistics:
  - Start: 20:36:00
  - End: 20:51:00
  - Total: 00:15:00
  - Video: 00:04:37
  - Study time to video time ratio: 3/1

</br>

- Modules
  - (terminal) Generate module with cli: `nest g module`;
  - The cli creates a coffees.module.ts file and add it to the app.module.ts;
  - @Module decorator
    - Provides metadata that nest uses to organize the application's structure;
    - Takes a single object as parameter, whose properties describe the module and all of its context;
      - controllers: API routes that we want this module to instantiate;
      - exports: List providers within this current module that should be available anywhere this module is imported;
      - imports: Other modules that this module requires;
      - providers: Services that need to be instantiated by the nest injector;
  - Remember to remove providers and controllers from the root module, since it can lead to unexpected issues related to these services being instantiated twice in the application;
