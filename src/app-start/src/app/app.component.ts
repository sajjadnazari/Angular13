import { Component } from '@angular/core';
import { lorem } from "faker";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ="app-start";
  isExist :boolean =false;
  currentPage : number = 0;
  setActiveClass(index:number){
    return index ===this.currentPage?'active':'';
  }
  checkWindowIndex(index : number){
    return Math.abs(this.currentPage - index) < 5
  }
  changePage(){
    this.currentPage -=1;
  }
  images = [
    {
      title:'test1',
      url:'https://ps.w.org/woo-free-product-sample/assets/icon-256x256.png?rev=2279441'
    },
    {
      title:'test2',
      url:'https://ps.w.org/woo-free-product-sample/assets/icon-256x256.png?rev=2279441'
    },
    {
      title:'test3',
      url:'https://ps.w.org/woo-free-product-sample/assets/icon-256x256.png?rev=2279441'
    },
    {
      title:'test4',
      url:'https://ps.w.org/woo-free-product-sample/assets/icon-256x256.png?rev=2279441'
    }
]
}
