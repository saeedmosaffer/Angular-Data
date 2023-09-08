import { Injectable } from '@angular/core';
import {Post} from "./models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];

  constructor() {
    this.getPosts();
  }

  getPosts() {
    this.posts = [
      new Post(1, 'Angular', 'Angular is a front end framework', 'Saeed', 'New York'),
      new Post(2, 'React', 'React is a front end library', 'Mohammad', 'Istanbul'),
      new Post(3, 'Vue', 'Vue is a front end framework', 'Ahmad', 'Palestine'),
      new Post(4, 'APS.Net', 'APS.Net is a Back end framework', 'Adham', 'Mayami'),
      new Post(5, 'Laravel', 'Laravel is a Back end framework', 'Obada', 'Los Angeles'),
      new Post(6, 'Django', 'Django is a Back end framework', 'Saeed', 'San Francisco'),
    ];
    return this.posts;
  }

  getPostsById(id: number){
    var result = this.posts.filter(p => {
      return p.id === id;
    });
    return result;
  }
}
