import { IsNumber, IsString } from 'class-validator';

export class CreateIncomeDTO {
  @IsString()
  title: string;
  @IsString()
  currency: string;
  @IsNumber()
  amount: number;
  @IsString()
  description: string;
  @IsString()
  paid_at: string;
}

export class UpdateIncomeDTO {
  @IsString()
  title: string;
  @IsString()
  currency: string;
  @IsNumber()
  amount: number;
  @IsString()
  description: string;
  @IsString()
  paid_at: string;
}
