import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApiModule } from './api/api.module';
// import { User } from './api/api.entity';
import { join } from 'path';
import { DataSource } from 'typeorm';
import { Set } from './app.entity'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Set]),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      // Use useFactory, useClass, or useExisting
      // to configure the DataSourceOptions.
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'telemarket',
        // entities: [User],
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: true,
      }),
     
      // dataSource receives the configured DataSourceOptions
      // and returns a Promise<DataSource>.
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options as any).initialize();
        return dataSource;  
      }
    }),
    ApiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
