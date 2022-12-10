import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll(@Res() response: Response) {
    response.status(200).send('This action returns all coffees');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #[${id}] cofee`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE) // Or @HttpCode(410)
  // It is possible to pass a string to @Body decorater to get only part of te body. @see: https://learn.nestjs.com/courses/591712/lectures/18346817
  create(@Body() body) {
    return body;
  }
}
