import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-all-posts-of-user',
  templateUrl: './all-posts-of-user.component.html',
  styleUrls: ['./all-posts-of-user.component.css']
})
export class AllPostsOfUserComponent implements OnInit {

  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(value => {
      this.postService.getUserPosts(value.id).subscribe(value1 =>  {
        this.posts = value1;
      });
    });
  }

  ngOnInit(): void {
  }

}
