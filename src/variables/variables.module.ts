import { Module } from '@nestjs/common';
import { VariablesService } from './variables.service';
import { VariablesController } from './variables.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Variable, VariableSchema } from 'src/schemas/variables.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Variable.name,
        schema: VariableSchema,
      },
    ]),
  ],  
  controllers: [VariablesController],
  providers: [VariablesService]
})
export class VariablesModule {}