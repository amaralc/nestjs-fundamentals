import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { SchemaSync1675006442987 } from 'src/migrations/1675006442987-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'mysecretpassword',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [SchemaSync1675006442987],
});
