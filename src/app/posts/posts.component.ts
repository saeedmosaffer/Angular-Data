import { Component } from '@angular/core';
import {Post} from "../models/Post";
import {PostService} from "../post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
    posts: Post[] = [];
    postService;

    constructor() {
        this.postService = new PostService();
       // this.posts = this.postService.getPosts();
      }

      getPosts(){ // function to add button to show the posts
        this.posts = this.postService.getPosts();
      }
    }
