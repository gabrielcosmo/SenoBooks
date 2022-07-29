import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SenoBooks';

  //as informações sobre os livros são meramente ilustrativas
  cards: Book[] = [
    {
      id: 0,
      title: 'The Fastest Man in the World',
      author: 'Juca Tartaruga',
      genre: ['fabel'],
      date: new Date,
      language: 'english',
      edition: '1',
      publishing: 'Moon',
      price: 120
    },
    {
      id: 0,
      title: 'A história de um livro',
      author: 'D. Cionário',
      genre: ['romance', 'fabel'],
      date: new Date(2022,4,2),
      language: 'potunhol',
      edition: '4',
      publishing: 'Biblioteca',
      price: 56
    },
    {
      id: 0,
      title: 'Engenharia de Cercas no sertão',
      author: 'João do Chapéu de Palha',
      genre: ['manual','biography'],
      date: new Date,
      language: 'Portuguese',
      edition: '5',
      publishing: 'Carnauba',
      price: 200
    },
  ];

  constructor(){}

  ngOnInit(): void {
  }
}
