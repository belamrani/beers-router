import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  AppRoutingModule, beerResolver, beersResolver, categoriesResolver,
  categoryResolver
} from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerCategoriesComponent } from './beer-categories/beer-categories.component';
import { BeerCategoryComponent } from './beer-category/beer-category.component';
import { BeersComponent } from './beers/beers.component';
import { BeerComponent } from './beer/beer.component';
import { ComposeComponent } from './compose/compose.component';
import {MajorGuardService} from './major-guard.service';
import {ConfirmationService, ConfirmDialogModule, DataListModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataService} from './data.service';
import {Actions} from './models';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BeerCategoriesComponent,
    BeerCategoryComponent,
    BeersComponent,
    BeerComponent,
    ComposeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    DataListModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ConfirmDialogModule
  ],
  providers: [MajorGuardService, ConfirmationService, DataService, Actions,
    {provide: 'categoriesResolver', useFactory: categoriesResolver, deps: [DataService]},
    {provide: 'categoryResolver', useFactory: categoryResolver, deps: [DataService]},
    {provide: 'beersResolver', useFactory: beersResolver, deps: [DataService]},
    {provide: 'beerResolver', useFactory: beerResolver, deps: [DataService]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
