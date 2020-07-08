import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {ActivatedRoute} from '@angular/router';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-all-comments-of-post',
  templateUrl: './all-comments-of-post.component.html',
  styleUrls: ['./all-comments-of-post.component.css']
})
export class AllCommentsOfPostComponent implements OnInit {
  comments: Comment[];
  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(value => {
      this.commentService.getPostComments(value.id).subscribe(value1 => {
        this.comments = value1;
      });
    });
  }

  ngOnInit(): void {
  }

}
