import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IncomeService } from './income.service';
import { Income, IncomeId } from './income.model';
import { CreateIncomeDTO, UpdateIncomeDTO } from './income.dto';

@Controller()
export class IncomeController {
  constructor(private incomeService: IncomeService) {}

  @Post('income')
  async createIncome(
    @Body() createIncomeDTO: CreateIncomeDTO,
  ): Promise<Income> {
    return this.incomeService.createIncome(createIncomeDTO);
  }

  @Get('incomes')
  async getAllIncomes(): Promise<Income[]> {
    return this.incomeService.getAllIncomes();
  }

  @Get('income/:id')
  async getIncomeById(@Param('id') id: IncomeId): Promise<Income> {
    return this.incomeService.getIncomeById(id);
  }

  @Put('income/:id')
  async updateIncome(
    @Param('id') id: IncomeId,
    @Body() updateIncomeDTO: UpdateIncomeDTO,
  ): Promise<Income> {
    console.log(updateIncomeDTO, id);
    return this.incomeService.updateIncome(id, updateIncomeDTO);
  }

  @Delete('income/:id')
  async deleteIncome(@Param('id') id: IncomeId): Promise<void> {
    await this.incomeService.deleteIncome(id);
  }
}
