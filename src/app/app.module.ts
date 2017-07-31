import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  AppRoutingModule, beersResolver, categoriesResolver,
  categoryResolver
} from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerCategoriesComponent } from './beer-categories/beer-categories.component';
import { BeerCategoryComponent } from './beer-category/beer-category.component';
import { BeersComponent } from './beers/beers.component';
import { BeerComponent } from './beer/beer.component';
import { ComposeComponent } from './compose/compose.component';
import {PicturesGuardService} from './pictures-guard.service';
import {BeerGuardService} from './beer-guard.service';
import {ConfirmationService} from 'primeng/components/common/api';
import {DataListModule} from 'primeng/components/datalist/datalist';
import {ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataService} from './data.service';
import {Actions} from './models';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
import {ComposeDeactivateGuardService} from './compose-deactivate-guard.service';
import {BeerResolverService} from './beer-resolver.service';

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
    ConfirmDialogModule,
    SelectButtonModule
  ],
  providers: [
    BeerGuardService, PicturesGuardService, ComposeDeactivateGuardService,
    BeerResolverService, ConfirmationService, DataService, Actions,
    {provide: 'categoriesResolver', useFactory: categoriesResolver, deps: [DataService]},
    {provide: 'categoryResolver', useFactory: categoryResolver, deps: [DataService]},
    {provide: 'beersResolver', useFactory: beersResolver, deps: [DataService]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
