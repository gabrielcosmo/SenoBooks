import { Component, OnInit } from '@angular/core';
import { Book } from './models/book';
import { BookService } from './service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Seno Books';

  //as informações sobre os livros são meramente ilustrativas
  cards: Book[] = []
  /*[
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
  ];*/

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) =>{
      console.log(typeof data)
      this.cards = data;
    
    })
  }
}
