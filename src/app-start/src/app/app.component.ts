import { Component } from '@angular/core';
import { lorem } from "faker";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ="app-start";
  randomText :string = lorem.sentence();
}
