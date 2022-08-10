import { Component, OnInit } from '@angular/core';
import { Reddit } from '../Reddit';
import { RedditApiService } from '../reddit-api.service';

@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.css']
})
export class RedditListComponent implements OnInit {

  reddit:Reddit = {} as Reddit;

  constructor(private redditApiService:RedditApiService) { }

  ngOnInit(): void {
    this.redditApiService.GetRedditApiCall().subscribe((response:Reddit) => {
      this.reddit = response;
    });
  }

}
