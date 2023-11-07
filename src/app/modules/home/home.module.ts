import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';
import { ListCardsComponent } from './list-cards/list-cards.component';
import { CardComponent } from './card/card.component';
import { RandomCardComponent } from './random-card/random-card.component';


@NgModule({
  declarations: [
  
    HomePageComponent,
        SearchComponent,
        ListCardsComponent,
        CardComponent,
        RandomCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HomeModule { }
