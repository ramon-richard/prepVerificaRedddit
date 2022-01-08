import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prepVerificaReddit';
  articles = new Array<string>(); //Dichiaro un array di stringhe


  addSpam(testo : HTMLInputElement,numero : HTMLInputElement) : boolean   //questi 2 sarebbero useless e spam
  {
    let t = testo.value; // qui prendo il testo della casella
    let n = Number(numero.value); // qui prendo il numero della casella2
    for (let index = 0; index < n; index++) {
      this.articles.push(t);
      
    }
    return false;
  }
}
