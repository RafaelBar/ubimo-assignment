import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { AdService } from '../ad.service';
import { IAdEvent } from 'ubimo-fed-home-assigment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})


export class MapComponent implements OnInit {
  ads: IAdEvent[] = [];
  
  constructor(
    private adService: AdService,
    private ngZone: NgZone) {
  }
  
  ngOnInit() {
    this.adService.observableCurrAd.subscribe(currAdRes => {
      this.ngZone.run(()=>{
        console.log(currAdRes)
        this.ads.push(currAdRes);
        setTimeout(() => {
          // todo: add uniqe id to each add and remove by id instead of pop
          this.ads.pop();
      }, 5000);
    });
  }); 
  }
}
