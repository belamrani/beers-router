import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PicturesRoutingModule} from './pictures.routing.module';
import {PicturesComponent} from './pictures.component';
import {GalleriaModule} from 'primeng/components/galleria/galleria';

@NgModule({
  imports: [CommonModule, GalleriaModule, PicturesRoutingModule],
  declarations: [
    PicturesComponent
  ]
})
export class PicturesModule {
}
