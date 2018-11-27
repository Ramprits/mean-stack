import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostModel } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  storePosts: PostModel[];
  constructor(private router: Router) {}

  ngOnInit() {}

  onCreated(data: PostModel) {
    console.log(data);
    // this.storePosts.push(data);
  }
}
