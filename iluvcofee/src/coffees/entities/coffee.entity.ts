import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * The default sql table generated is the lower case version of the class name, 'coffee',
 * unless an argument is passed to the decorator.
 *
 * e.g.: @Entity('coffees') -> 'coffees'
 */
@Entity('coffees')
export class Coffee {
  // Inform typeorm to generate a colum with primary index and automatically generated values
  @PrimaryGeneratedColumn()
  id: number;

  // Inform typeorm to generate a column in the sql table
  @Column()
  name: string;

  @Column()
  brand: string;

  // Inform typeorm to generate a nullable column with json values (temporary, soon we will create relationships)
  @Column('json', { nullable: true })
  flavors: string[];
}
