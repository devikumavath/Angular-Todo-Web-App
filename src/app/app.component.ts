import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Devi-Todos-list';
  constructor(){
    // setTimeout(() => {
    //   this.title = "changed title"
    // }, 2000);
  }
}
