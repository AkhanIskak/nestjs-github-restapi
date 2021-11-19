import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { GithubService } from './services/github.service';
import { GithubController } from './app.githubcontroller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [AppController, GithubController],
  providers: [AppService, GithubService],
})
export class AppModule {}
