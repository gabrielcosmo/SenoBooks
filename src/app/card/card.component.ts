import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { CardButtonComponent } from '../card-button/card-button.component';
import { Book } from '../models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  
  bought: boolean = false;
  @Input() card: HTMLElement | any = 0;
  @Input() book: Book = {
    id: 0,
    title: '',
    edition: '',
    author: '',
    date: new Date,
    genre: [],
    language: '',
    publishing: '',
    price: 0
  }

  constructor() { }

  ngOnInit(): void { }

  buttonBuy(card: HTMLElement): void{
    if(this.bought){
      this.devolveBook(card);
      this.bought = false;
    }
    else{
      this.boughtBook(card);
      this.bought = true;
    }
  }
  
  boughtBook(card: HTMLElement): void{
    card.classList.add('bought');
  }

  devolveBook(card: HTMLElement){
    card.classList.remove('bought');
  }

  removeCard(card: HTMLElement): void{
    card.remove();
  }
}
