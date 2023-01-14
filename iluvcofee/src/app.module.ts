import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

console.log(process.env.POSTGRES_USERNAME);

@Module({
  imports: [
    /**
     * Use config module to expose environment variables
     *
     * @see https://docs.nestjs.com/techniques/configuration
     */
    ConfigModule.forRoot(),
    /**
     * Use TypeORM module with environment variables from config module
     */
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const config = {
          type: 'postgres' as const,

          /**
           * Use environment variables
           *
           * @see https://docs.nestjs.com/techniques/configuration
           * @see https://stackoverflow.com/questions/63678216/nestjs-setup-typeorm-connection-with-env-and-nestjs-config
           */
          host: configService.get<string>('DATABASE_HOST'),
          port: configService.get<number>('POSTGRES_PORT'),
          username: configService.get<string>('POSTGRES_USERNAME'),
          password: configService.get<string>('POSTGRES_PASSWORD'),
          database: configService.get<string>('POSTGRES_DATABASE'),
          // Helps loading modules automatically instead of specifying entities array
          autoLoadEntities: true,
          // Ensure that our TypeORM entities will be synced with the database every time we run our application. Disable in production
          synchronize: process.env.NODE_ENV === 'production' ? false : true,
        };

        return config;
      },
    }),
    CoffeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
