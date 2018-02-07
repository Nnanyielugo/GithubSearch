import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // create a user property
  user=[]
  repos= [];
  username: string;
  
  constructor(private githubService: GithubService) {
    // code to get user and repo moved to the searchUser method so that there'll be no default profile displayed on initial load
    // then set user to null since 'false' throws an 'unassignable' error
    this.user = null;
  }

  searchUser(){
    // console.log("it works")
    this.githubService.updateUser(this.username);

    // duplicate the code for getting user and repos so that once the username is changed the user and repos paths of the api re-renders
    this.githubService.getUser()
          .subscribe(user => {
            // console.log(user)        //cpmment out logging and assign the response from the api to the user property set above
            this.user = user;
          });

    // subscribe to the observable response (data fetched from github)from the github service
    this.githubService.getRepos()
    .subscribe(repos => {
      // assign the response from the api to the user property set above
      this.repos = repos;
    });
  }
  

  ngOnInit() {
  }

}
