import { Component, OnInit } from '@angular/core';
import { mobileProducts } from '../../const/mobile';
import { Imobile } from '../../model/mobile';

@Component({
  selector: 'app-mobilecard',
  templateUrl: './mobilecard.component.html',
  styleUrls: ['./mobilecard.component.scss']
})
export class MobilecardComponent implements OnInit {
  mobileData : Array<Imobile> = [];
  constructor() { }

  ngOnInit(): void {
    this.mobileData = mobileProducts;
  }

}
