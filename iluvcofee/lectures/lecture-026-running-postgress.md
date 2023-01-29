https://learn.nestjs.com/courses/591712/lectures/23193757

- Statistics:
  - Start: 22:59:00
  - End: 23:03:00
  - Total: 00:04:00
  - Video: 00:02:09
  - Study time to video time ratio: 2/1

</br>

- Postgres with docker;
- Postgres with docker compose;
- Example of .yml file:

```yml
version: '3'
services:
  db:
    image: postgres
    restart: always
    ports:
      - '5432:5432'
    environment:
      POSTGRES_PASSWORD: pass123
```

- Running the docker-compose file

  - `docker-compose up -d`;
    - "-d" -> detached mode;

- Running a specific service:
  - `docker-compose up db -d`;
  - "db" -> the name of the service defined in the yml file;
