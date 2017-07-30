import {NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule} from '@angular/router';
import {BeerCategoriesComponent} from './beer-categories/beer-categories.component';
import {BeerCategoryComponent} from './beer-category/beer-category.component';
import {BeersComponent} from './beers/beers.component';
import {BeerComponent} from './beer/beer.component';
import {ComposeComponent} from './compose/compose.component';
import {MajorGuardService} from './major-guard.service';
import {DataService} from './data.service';
import {PicturesGuardService} from './pictures-guard.service';

const routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/drank'
  },
  { path: 'pictures',
    canLoad: [PicturesGuardService],
    loadChildren: 'app/pictures/pictures.module#PicturesModule'
  },
  {
    path: ':folder',
    children: [
      {
        path: '',
        component: BeerCategoriesComponent,
        resolve: {categories: 'categoriesResolver'}
      },
      {
        path: ':id',
        component: BeerCategoryComponent,
        resolve: {category: 'categoryResolver'},
        children: [
          {
            path: '',
            component: BeersComponent,
            resolve: {beers: 'beersResolver'}
          },
          {
            path: 'beers/:name',
            component: BeerComponent,
            canActivate: [MajorGuardService],
            resolve: {beers: 'beersResolver', beer: 'beerResolver'}
          }
        ]
      }
    ]
  },
  {
    path: 'compose',
    component: ComposeComponent,
    outlet: 'newbeer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


export function categoriesResolver(dataService: DataService) {
  return (route: ActivatedRouteSnapshot) => dataService.getCategories();
}

export function categoryResolver(dataService: DataService) {
  return (route: ActivatedRouteSnapshot) => dataService.getCategory(+route.params['id']);
}

export function beersResolver(dataService: DataService) {
  return (route: ActivatedRouteSnapshot) => dataService.getBeers(+route.parent.params['id'], route.parent.params['folder']);
}

export function beerResolver(dataService: DataService) {
  return (route: ActivatedRouteSnapshot) => dataService.getBeer(route.params['name']);
}
