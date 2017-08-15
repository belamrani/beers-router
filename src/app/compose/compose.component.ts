import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import * as BeerActions from '../store/actions';
import {SelectItem} from 'primeng/primeng';
import {State} from '../store/reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    list: new FormControl('')
  });

  cancel = false;

  lists: SelectItem[];

  constructor(private route: ActivatedRoute, private router: Router,
              private store: Store<State>) {
    this.lists = [];
    this.lists.push({label: 'Drank', value: 'drank'});
    this.lists.push({label: 'To Try', value: 'to-try'});
  }

  onSubmit() {
    const conversationRoute = this.route.snapshot.root.firstChild.firstChild;
    const categoryId = +conversationRoute.params['id'];

    this.store.dispatch(new BeerActions.AddBeer({
      categoryId: categoryId,
      id: 1,
      list: this.form.value.list,
      name: this.form.value.name,
      description:  this.form.value.description
    }));
    this.router.navigate(['/', {outlets: {newbeer: null}}]);
  }

}
