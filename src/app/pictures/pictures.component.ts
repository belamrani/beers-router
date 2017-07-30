import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  constructor() {
  }

  images: any[];

  ngOnInit() {
    this.images = [];
    this.images.push({
      source: 'assets/beer2.jpeg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    });
    this.images.push({
      source: 'assets/beer3.jpeg',
      alt: 'Description for Image 2',
      title: 'Title 2'
    });
    this.images.push({
      source: 'assets/beer4.jpeg',
      alt: 'Description for Image 3',
      title: 'Title 3'
    });
    this.images.push({
      source: 'assets/beer5.jpeg',
      alt: 'Description for Image 4',
      title: 'Title 4'
    });
    this.images.push({
      source: 'assets/beer6.jpeg',
      alt: 'Description for Image 5',
      title: 'Title 5'
    });
    this.images.push({
      source: 'assets/beer7.jpeg',
      alt: 'Description for Image 6',
      title: 'Title 6'
    });
    this.images.push({
      source: 'assets/beer8.jpeg',
      alt: 'Description for Image 7',
      title: 'Title 7'
    });
  }

}
