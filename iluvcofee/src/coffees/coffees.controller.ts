import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll() {
    return 'This action returns all coffees';
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
