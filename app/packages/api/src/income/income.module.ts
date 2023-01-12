import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeService } from './income.service';
import { MongoIncome, IncomeSchema } from './income.schema';
import { IncomeController } from './income.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MongoIncome.name, schema: IncomeSchema },
    ]),
  ],
  controllers: [IncomeController],
  providers: [IncomeService],
})
export class IncomeModule {}
