import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CardComponent } from './card/card.component';
import { CardButtonComponent } from './card-button/card-button.component';
import { BookService } from './service/book.service';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CardComponent,
    CardButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
