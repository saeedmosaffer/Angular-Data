import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../post.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
    id : any;
    post : any;
    postService;
     constructor(private route: ActivatedRoute) {
       this.postService = new PostService();
     }

     ngOnInit() {
       this.route.params.subscribe(params => {
         this.id = params['id'];
       });
       this.post = this.postService.getPostsById(Number(this.id));
     }
}
