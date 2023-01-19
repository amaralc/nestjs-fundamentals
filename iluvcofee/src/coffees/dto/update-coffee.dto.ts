// import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger'; // Expose request body type to swagger ui
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
