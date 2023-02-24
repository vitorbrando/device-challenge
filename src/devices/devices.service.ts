import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import  { Model } from 'mongoose';
import { DeviceDocument } from 'src/schemas/device.schema';
import { Variable, VariableDocument } from 'src/schemas/variables.schema';
import { WebsocketService } from 'src/websocket/websocket.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { CreateVariableDto } from './dto/create-variable.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './entities/device.entity';

@Injectable()
export class DevicesService {
  constructor(
    @InjectModel(Device.name) private readonly deviceModel: Model<DeviceDocument>,
    @InjectModel(Variable.name) private readonly variableModel: Model<VariableDocument>,
    private readonly webSocket: WebsocketService
  ) {}

  async create(createDeviceDto: CreateDeviceDto): Promise<DeviceDocument> {
    const device = new this.deviceModel(createDeviceDto);
    return device.save();
  }

  async findAll(): Promise<DeviceDocument[]> {
    return this.deviceModel.find();
  }

  async findOne(id: string) {
    return this.deviceModel.findById(id).populate('variables');
  }

  async update(
    id: string, 
    updateDeviceDto: UpdateDeviceDto
  ): Promise<DeviceDocument> {
    const msg = `Device ${id} has updated`;
    this.webSocket.send_message(msg);
    return this.deviceModel.findByIdAndUpdate(id, updateDeviceDto);
  }

  async remove(id: string) {
    return this.deviceModel.findByIdAndRemove(id);
  }

  async create_information(createVariableDto: CreateVariableDto): Promise<VariableDocument> {
    const msg = `Device ${createVariableDto.device} received information`;
    this.webSocket.send_message(msg);
    const variable = new this.variableModel(createVariableDto);
    return variable.save();
  }
}
