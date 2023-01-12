import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { Config, config } from './config';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeModule } from './income';
import { ExpenseModule } from './expense';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<Config>) => ({
        uri: configService.get('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    IncomeModule,
    ExpenseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
