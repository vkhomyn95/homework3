import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {RouterModule, Routes} from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { AllPostsOfUserComponent } from './components/all-posts-of-user/all-posts-of-user.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { AllCommentsOfPostComponent } from './components/all-comments-of-post/all-comments-of-post.component';
import { CommentComponent } from './components/comment/comment.component';

const  links: Routes = [
  {path: 'showAllUsers&Posts', component: AllUsersComponent},
  {path: 'showAllPosts&Comments', component: AllPostsComponent},
  {path: 'posts/:id', component: AllPostsOfUserComponent},
  {path: 'comments/:id', component: AllCommentsOfPostComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    PostComponent,
    AllPostsOfUserComponent,
    AllPostsComponent,
    PostPageComponent,
    AllCommentsOfPostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(links)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
