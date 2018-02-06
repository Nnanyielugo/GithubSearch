import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;

  constructor(private http: Http) {
    console.log('Github service ready');
    this.username = 'Nnanyielugo';
  }

  // make a request to the github api using the getUser method and supplying the username placeholder and return response as observable
  getUser(){
    return this.http.get('http://api.github.com/users/'+this.username)
        .map(res => res.json());
  }

  // request to get repositories
  getRepos(){
    return this.http.get('http://api.github.com/users/'+this.username+'/repos')
        .map(res => res.json());
  }

  // update user by setting the username parameter of updateuser to the property 'username'
  updateUser(username:string){
    this.username = username;
  }

}
