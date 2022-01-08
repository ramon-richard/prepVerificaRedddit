import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prepVerificaReddit';
  articles = new Array<string>(); //Dichiaro un array di stringhe


  addSpam() : boolean
  {
    console.log("ciao");
    return false;
  }
}
