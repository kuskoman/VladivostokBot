import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { baseConfig } from './base.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [baseConfig],
      isGlobal: true,
      ignoreEnvFile: false,
      cache: true,
    }),
  ],
})
export class AppConfigModule {}
