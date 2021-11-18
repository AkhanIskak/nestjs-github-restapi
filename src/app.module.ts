import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { GithubService } from './services/github.service';
import { GithubController } from './app.githubcontroller';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  controllers: [AppController, GithubController],
  providers: [AppService, GithubService],
})
export class AppModule {}
