import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VariableDocument } from 'src/schemas/variables.schema';
import { CreateVariableDto } from './dto/create-variable.dto';
import { Variable } from './entities/variable.entity';

@Injectable()
export class VariablesService {
  constructor(
    @InjectModel(Variable.name) private readonly variableModel: Model<VariableDocument>,
  ) {}

  async create(createDeviceDto: CreateVariableDto): Promise<VariableDocument> {
    const variable = new this.variableModel(createDeviceDto);
    return variable.save();
  }
}