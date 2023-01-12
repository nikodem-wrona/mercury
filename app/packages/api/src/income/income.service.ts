import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateIncomeDTO, UpdateIncomeDTO } from './income.dto';
import { IncomeDocument, MongoIncome } from './income.schema';
import { Income, IncomeId } from './income.model';
import { incomeMapper } from './income.mapper';

@Injectable()
export class IncomeService {
  constructor(
    @InjectModel(MongoIncome.name)
    private incomeModel: Model<IncomeDocument>,
  ) {}

  async createIncome(createIncomeDTO: CreateIncomeDTO): Promise<Income> {
    const { title, description, currency, amount, paid_at } = createIncomeDTO;

    const result = await this.incomeModel.create({
      title,
      description,
      currency,
      amount,
      paid_at: new Date(paid_at).toUTCString(),
      created_at: new Date().toUTCString(),
      updated_at: new Date().toUTCString(),
    });

    if (!result) {
      throw new Error('Income could not be created');
    }

    return incomeMapper.fromDB(result);
  }

  async getAllIncomes(): Promise<Income[]> {
    const result = await this.incomeModel.find();

    if (result.length === 0) {
      return [];
    }

    return result.map(incomeMapper.fromDB);
  }

  async getIncomeById(incomeId: IncomeId): Promise<Income> {
    const result = await this.incomeModel.findById(incomeId);

    if (!result) {
      throw new Error('Income could not be found');
    }

    return incomeMapper.fromDB(result);
  }

  async updateIncome(
    incomeId: IncomeId,
    updateIncomeDTO: UpdateIncomeDTO,
  ): Promise<Income> {
    const { title, description, currency, amount, paid_at } = updateIncomeDTO;

    const result = await this.incomeModel.findByIdAndUpdate(incomeId, {
      $set: {
        title,
        description,
        currency,
        amount,
        paid_at,
      },
    });

    if (!result) {
      throw new Error('Income could not be updated');
    }

    return incomeMapper.fromDB(result);
  }

  async deleteIncome(incomeId: IncomeId): Promise<void> {
    await this.incomeModel.findByIdAndDelete(incomeId);
  }
}
