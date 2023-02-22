import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeviceDocument } from 'src/schemas/device.schema';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './entities/device.entity';

@Injectable()
export class DevicesService {
  constructor(
    @InjectModel(Device.name) private readonly deviceModel: Model<DeviceDocument>,
  ) {}

  async create(createDeviceDto: CreateDeviceDto): Promise<DeviceDocument> {
    const device = new this.deviceModel(createDeviceDto);
    return device.save();
  }

  async findAll(): Promise<DeviceDocument[]> {
    return this.deviceModel.find();
  }

  findOne(id: string) {
    return this.deviceModel.findById(id);
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
