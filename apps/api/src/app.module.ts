import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SentryGlobalFilter, SentryModule } from '@sentry/nestjs/setup'
import { SwaggerModule } from '@nestjs/swagger'
import { APP_FILTER } from '@nestjs/core'

@Module({
  imports: [SentryModule.forRoot(), SwaggerModule],
  controllers: [AppController],
  providers: [{ provide: APP_FILTER, useClass: SentryGlobalFilter }, AppService],
})
export class AppModule {}
