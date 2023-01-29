import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

@Module({
  controllers: [CoffeesController],
  providers: [
    /**
     * Use the following format for the short version
     */
    CoffeesService,

    /**
     * Use the following format if you want to explicitly tell what 'token' to provide and what class to use as the provider
     */
    // {
    //   provide: CoffeesService,
    //   useClass: CoffeesService,
    // },
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
