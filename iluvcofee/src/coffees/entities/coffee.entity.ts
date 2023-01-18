import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

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

  // // Inform typeorm to generate a nullable column with json values (temporary, soon we will create relationships)
  // @Column('json', { nullable: true })
  // flavors: string[];

  /**
   * Decorator registered only in the owner of the relation
   */
  @JoinTable()
  /**
   * ManyToMany parameters
   *
   * 1 - Relation type: Function that returns a reference to the related entity
   * 2 - Arrow function that returns the related entity and specifies what property needs to be selected that is the inverse side of the relationship (what is coffee inside of the Flavors entity?)
   */
  @ManyToMany(
    (type) => Flavor,
    (flavor) => flavor.coffees,
    { cascade: true }, // allow cascading to all operations
    // { cascade: ['insert'] } // Limits cascading only to insert operation
  )
  flavors: Flavor[];
}
