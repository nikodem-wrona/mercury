import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateExpenseDTO {
  @IsString()
  title: string;
  @IsString()
  currency: string;
  @IsNumber()
  amount: number;
  @IsString()
  description: string;
  @IsBoolean()
  is_recurring: boolean;
  @IsString()
  paid_at: string;
}

export class UpdateExpenseDTO {
  @IsString()
  title: string;
  @IsString()
  currency: string;
  @IsNumber()
  amount: number;
  @IsString()
  description: string;
  @IsBoolean()
  is_recurring: boolean;
  @IsString()
  paid_at: string;
}
