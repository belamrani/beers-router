import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BeerCategoriesComponent} from './beer-categories/beer-categories.component';
import {BeerCategoryComponent} from './beer-category/beer-category.component';
import {BeersComponent} from './beers/beers.component';
import {BeerComponent} from './beer/beer.component';
import {ComposeComponent} from './compose/compose.component';
import {BeerGuardService} from './beer-guard.service';
import {PicturesGuardService} from './pictures-guard.service';
import {ComposeDeactivateGuardService} from './compose-deactivate-guard.service';
import {BeerResolverService} from './beer-resolver.service';
import {CategoriesResolverService} from './categories-resolver.service';
import {CategoryResolverService} from './category-resolver.service';
import {BeersResolverService} from './beers-resolver.service';

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
    path: ':list',
    children: [
      {
        path: '',
        component: BeerCategoriesComponent,
        resolve: {categories: CategoriesResolverService}
      },
      {
        path: ':id',
        component: BeerCategoryComponent,
        resolve: {category: CategoryResolverService},
        children: [
          {
            path: '',
            component: BeersComponent,
            resolve: {beers: BeersResolverService}
          },
          {
            path: 'beers/:name',
            component: BeerComponent,
            canActivate: [BeerGuardService],
            resolve: {beers: BeersResolverService, beer: BeerResolverService}
          }
        ]
      }
    ]
  },
  {
    path: 'compose',
    canDeactivate: [ComposeDeactivateGuardService],
    component: ComposeComponent,
    outlet: 'newbeer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


// export function categoriesResolver(dataService: DataService) {
//   return (route: ActivatedRouteSnapshot) => dataService.getCategories();
// }
//
// export function categoryResolver(dataService: DataService) {
//   return (route: ActivatedRouteSnapshot) => dataService.getCategory(+route.params['id']);
// }
//
// export function beersResolver(dataService: DataService) {
//   return (route: ActivatedRouteSnapshot) => dataService.getBeers(+route.parent.params['id'], route.parent.params['list']);
// }
//
// export function beerResolver(dataService: DataService) {
//   return (route: ActivatedRouteSnapshot) => dataService.getBeer(route.params['name']);
// }
