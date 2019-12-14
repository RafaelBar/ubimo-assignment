import { Component, OnInit } from '@angular/core';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  private currAd = {};
  constructor(private adService: AdService) { }

  ngOnInit() {
    this.adService.observableCurrAd.subscribe(currAd => {
      console.log(currAd);
      this.currAd = currAd;
    });
  }

}
