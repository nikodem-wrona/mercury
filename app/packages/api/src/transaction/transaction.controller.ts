import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Transaction, TransactionId } from './transaction.model';
import { CreateTransactionDTO, UpdateTransactionDTO } from './transaction.dto';
import { CustomRequest } from 'src/auth.types';

@Controller()
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post('transaction')
  async createTransaction(
    @Body() createTransactionDTO: CreateTransactionDTO,
    @Request() req: CustomRequest,
  ): Promise<Transaction> {
    const { userId } = req;
    return this.transactionService.createTransaction(
      createTransactionDTO,
      userId,
    );
  }

  @Get('transactions')
  async getAllTransactions(): Promise<Transaction[]> {
    return this.transactionService.getAllTransactions();
  }

  @Get('transaction/:id')
  async getTransactionById(
    @Param('id') id: TransactionId,
  ): Promise<Transaction> {
    return this.transactionService.getTransactionById(id);
  }

  @Put('transaction/:id')
  async updateTransaction(
    @Param('id') id: TransactionId,
    @Body() updateTransactionDTO: UpdateTransactionDTO,
  ): Promise<Transaction> {
    console.log(updateTransactionDTO, id);
    return this.transactionService.updateTransaction(id, updateTransactionDTO);
  }

  @Delete('transaction/:id')
  async deleteTransaction(@Param('id') id: TransactionId): Promise<void> {
    await this.transactionService.deleteTransaction(id);
  }
}
