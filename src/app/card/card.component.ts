import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
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

  ngOnInit(): void {
  }

}
