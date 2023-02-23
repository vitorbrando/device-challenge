import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { DeviceDocument } from 'src/schemas/device.schema';
import { VariableDocument } from 'src/schemas/variables.schema';
import { Variable } from 'src/variables/entities/variable.entity';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './entities/device.entity';

@Injectable()
export class DevicesService {
  constructor(
    @InjectModel(Device.name) private readonly deviceModel: Model<DeviceDocument>,
    @InjectModel(Variable.name) private readonly variableModel: Model<VariableDocument>
  ) {}

  async findVariablesForDevice(deviceId: string): Promise<Variable[]> {
    const query: any = { user: new mongoose.Types.ObjectId(deviceId) }
    return await this.variableModel.find(query).exec();
  }

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
    return this.deviceModel.findByIdAndUpdate(id, updateDeviceDto);
  }

  async remove(id: string) {
    return this.deviceModel.findByIdAndRemove(id);
  }
}
