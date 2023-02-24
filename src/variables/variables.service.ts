import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VariableDocument } from 'src/schemas/variables.schema';
import { WebsocketService } from 'src/websocket/websocket.service';
import { CreateVariableDto } from './dto/create-variable.dto';
import { Variable } from './entities/variable.entity';

@Injectable()
export class VariablesService {
  constructor(
    @InjectModel(Variable.name) private readonly variableModel: Model<VariableDocument>,
    private readonly webSocket: WebsocketService
  ) {}

  async create(createVariableDto: CreateVariableDto): Promise<VariableDocument> {
    const msg = `Device ${createVariableDto.device} received information`;
    this.webSocket.information_received(msg);
    const variable = new this.variableModel(createVariableDto);
    return variable.save();
  }
}