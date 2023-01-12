import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { Expense } from './expense.model';
import { CreateExpenseDTO, UpdateExpenseDTO } from './expense.dto';

@Controller()
export class ExpenseController {
  constructor(private expenseService: ExpenseService) {}

  @Post('expense')
  async createExpense(
    @Body() createExpenseDTO: CreateExpenseDTO,
  ): Promise<Expense> {
    return this.expenseService.createExpense(createExpenseDTO);
  }

  @Get('expenses')
  async getAllExpenses(): Promise<Expense[]> {
    return this.expenseService.getAllExpenses();
  }

  @Get('expense/:id')
  async getExpenseById(@Param('id') id: string): Promise<Expense> {
    return this.expenseService.getExpenseById(id);
  }

  @Put('expense/:id')
  async updateExpense(
    @Param('id') id: string,
    @Body() updateExpenseDTO: UpdateExpenseDTO,
  ): Promise<Expense> {
    return this.expenseService.updateExpense(id, updateExpenseDTO);
  }

  @Delete('expense/:id')
  async deleteExpense(@Param('id') id: string): Promise<void> {
    await this.expenseService.deleteExpense(id);
  }
}
