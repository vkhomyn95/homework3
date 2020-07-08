import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  @Input()
  post: Post;
  constructor() { }

  ngOnInit(): void {
  }

}
