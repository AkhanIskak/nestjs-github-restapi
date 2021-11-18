import { Controller, Get, Param, Query, Req } from "@nestjs/common";
import { GithubService } from "./services/github.service";
import { Request } from "express";
import { AxiosResponse } from "axios";

@Controller('repo')
export class GithubController {
  constructor(private readonly githubService: GithubService) {
  }
  // @ts-ignore
  @Query()
  @Get('/:userName/:repoName/:branchName')
  async getCommits(@Param() params, @Query() query): Promise<string[]> {

    const commits = await this.githubService.getCommits(params,query);

    return commits;
  }
}
