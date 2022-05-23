import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ="app-start";
  posts =[
    {
      title :"one",
      imageUrl:"assets/images/1.png",
      username:"jffjsd",
      content:"hello word"
    },
    {
      title :"two",
      imageUrl:"assets/images/2.png",
      username:"john",
      content:"hello word"
    },
    {
      title :"three",
      imageUrl:"assets/images/3.png",
      username:"mike",
      content:"hello word"
    }
  ]

  getPosts( )
  { return this.posts}
}
