import { Injectable, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { COFFEES_BRANDS } from './coffees.constants';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}

@Injectable()
export class CoffeeBrandsFactory {
  create() {
    return ['buddy brew', 'nescafe'];
  }
}

@Module({
  controllers: [CoffeesController],
  providers: [
    // Default version (https://learn.nestjs.com/courses/591712/lectures/18346941)

    CoffeesService,
    CoffeeBrandsFactory,
    // Use non-class based provider tokens (https://learn.nestjs.com/courses/591712/lectures/23242247)
    {
      provide: COFFEES_BRANDS,
      inject: [CoffeeBrandsFactory],
      useFactory: (brandsFactory: CoffeeBrandsFactory) =>
        brandsFactory.create(),
    },

    // Use class based provider tokens (https://learn.nestjs.com/courses/591712/lectures/23242248)
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === 'development'
          ? DevelopmentConfigService
          : ProductionConfigService,
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
