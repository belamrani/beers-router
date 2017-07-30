import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Actions} from '../models';
import {SelectItem} from 'primeng/components/common/api';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    folder: new FormControl('')
  });

  folders: SelectItem[];

  constructor(private route: ActivatedRoute, private router: Router, private actions: Actions) {
    this.folders = [];
    this.folders.push({label: 'Drank', value: 'drank'});
    this.folders.push({label: 'To Try', value: 'to-try'});
  }

  onSubmit() {
    const conversationRoute = this.route.snapshot.root.firstChild.firstChild;
    const categoryId = +conversationRoute.params['id'];

    this.actions.next({
      type: 'add',
      categoryId: categoryId,
      payload: this.form.value,
      onSuccess: () => this.hidePopup()
    });
  }

  private hidePopup() {
    this.router.navigate(['/', {outlets: {popup: null}}]);
  }

}
