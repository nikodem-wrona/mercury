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
  async getAllTransactions(
    @Request() req: CustomRequest,
  ): Promise<Transaction[]> {
    const { userId } = req;
    return this.transactionService.getAllTransactions(userId);
  }

  @Get('transaction/:id')
  async getTransactionById(
    @Param('id') id: TransactionId,
    @Request() req: CustomRequest,
  ): Promise<Transaction> {
    const { userId } = req;
    return this.transactionService.getTransactionById(id, userId);
  }

  @Put('transaction/:id')
  async updateTransaction(
    @Param('id') id: TransactionId,
    @Body() updateTransactionDTO: UpdateTransactionDTO,
    @Request() req: CustomRequest,
  ): Promise<Transaction> {
    const { userId } = req;
    return this.transactionService.updateTransaction(
      id,
      updateTransactionDTO,
      userId,
    );
  }

  @Delete('transaction/:id')
  async deleteTransaction(
    @Param('id') id: TransactionId,
    @Request() req: CustomRequest,
  ): Promise<void> {
    const { userId } = req;
    await this.transactionService.deleteTransaction(id, userId);
  }
}
