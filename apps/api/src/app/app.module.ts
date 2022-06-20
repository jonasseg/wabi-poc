import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './core/auth/auth.module';
import { getEnvPath } from './core/common/helper/env.helper';
import { GlobalMiddleware } from './core/middleware/logger.middleware';
import { EnvironmentInterface } from './shared/interface/environment.interface';

const envFilePath: string = getEnvPath();

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true, cache: true }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private configService: ConfigService<EnvironmentInterface>) {
    const env = this.configService.get('NODE_ENV');
    const port = this.configService.get('PORT', { infer: true });
    console.log('ENV', env);
    console.log('port', port);
  }

  public configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(GlobalMiddleware)
      .forRoutes({ path: '**', method: RequestMethod.ALL });
  }
}
