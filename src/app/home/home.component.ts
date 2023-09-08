import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  image1 = 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3b6b5b5b5b5b5b5b5b5b5b5b5b5b5b5&auto=format&fit=crop&w=1950&q=80';
  image2 = 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=600';
  image3 = 'https://images.pexels.com/photos/7622520/pexels-photo-7622520.jpeg?auto=compress&cs=tinysrgb&w=600';
  image4 = 'https://images.pexels.com/photos/926390/pexels-photo-926390.jpeg?auto=compress&cs=tinysrgb&w=600';

}
