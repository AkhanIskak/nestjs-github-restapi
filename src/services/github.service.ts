import { Injectable } from "@nestjs/common";
import { HttpModule, HttpService } from "@nestjs/axios";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {
  }

  async getCommits(params,query) {

    console.log(`https://api.github.com/repos/${params.userName}/${params.repoName}/${params.branchName}`)
    const response = await this.httpService
      .get(
        `https://api.github.com/repos/${params.userName}/${params.repoName}/commits?sha=${params.branchName}`,
      )
      .toPromise();
    let data: Array<string> = [];
    if(query.filterBy==='hash'){
      for(let i in response.data){
        data.push(response.data[i].sha);
      }
    }
    else if (query.filterBy==='name'){
      for(let i in response.data){
        data.push(response.data[i].commit.message);
      }
    }
    return data;
  }
}
