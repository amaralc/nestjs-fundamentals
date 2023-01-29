import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [
    /**
     * Use config module to expose environment variables
     * @see https://docs.nestjs.com/techniques/configuration
     *
     */
    ConfigModule.forRoot(),
    /**
     * Use TypeORM module with environment variables from config module
     * @see https://stackoverflow.com/questions/63678216/nestjs-setup-typeorm-connection-with-env-and-nestjs-config
     */
    TypeOrmModule.forRootAsync({
      // imports: [ConfigModule],
      // inject: [ConfigService],
      useFactory: () => {
        const config = {
          type: 'postgres' as const,
          host: process.env.DATABASE_HOST,
          port: Number(process.env.DATABASE_HOST),
          username: process.env.POSTGRES_USERNAME,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DATABASE,
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
