import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { COFFEES_BRANDS } from './coffees.constants';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

@Module({
  controllers: [CoffeesController],
  providers: [
    /**
     * Use the following format for the short version
     *
     * @see https://learn.nestjs.com/courses/591712/lectures/18346941
     */
    CoffeesService,

    /**
     * Use the following format if you want to explicitly tell what class-based provider 'token' to provide and what class to use as the provider
     *
     *  {
     *    provide: CoffeesService,
     *    useClass: CoffeesService,
     *  }
     *
     * @see https://learn.nestjs.com/courses/591712/lectures/18346941
     */

    /**
     * Use non-class based provider tokens
     *
     * @see https://learn.nestjs.com/courses/591712/lectures/23242247
     */
    {
      provide: COFFEES_BRANDS,
      useValue: ['buddy brew', 'nescafe'],
    },
  ],
  /**
   * Registers typeorm in this child module
   */
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  /**
   * Expose providers to global API, so that other modules are able to make use of them
   */
  exports: [CoffeesService],
})
export class CoffeesModule {}
