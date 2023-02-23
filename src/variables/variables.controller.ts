import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VariablesService } from './variables.service';
import { CreateVariableDto } from './dto/create-variable.dto';

@Controller('variables')
export class VariablesController {
  constructor(private readonly variablesService: VariablesService) {}

  @Post()
  create(@Body() createVariableDto: CreateVariableDto) {
    return this.variablesService.create(createVariableDto);
  }
}
