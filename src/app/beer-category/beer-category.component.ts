import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Category} from '../models';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-beer-category',
  templateUrl: './beer-category.component.html',
  styleUrls: ['./beer-category.component.scss']
})
export class BeerCategoryComponent {
  category: Observable<Category>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.category = route.data.pluck('category');
  }

  goUp(): void {
    const list = this.route.snapshot.parent.params['list'];
    this.router.navigate(['/', list]);
  }

}
