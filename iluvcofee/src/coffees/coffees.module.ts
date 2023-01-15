import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService],
  /**
   * Registers typeorm in this child module
   */
  imports: [TypeOrmModule.forFeature([Coffee, Flavor])],
})
export class CoffeesModule {}
