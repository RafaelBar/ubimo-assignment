import { Component, OnInit, NgZone } from '@angular/core';
import { AdService, IAdEventWithTime } from '../ad.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})


export class MapComponent implements OnInit {
  ads: IAdEventWithTime[] = [];
  
  constructor(
    private adService: AdService, private ngZone: NgZone) {
  }
  
  ngOnInit() {
    this.adService.observableCurrAd.subscribe(currAdRes => {
      this.ngZone.run(()=> {
        const ad: IAdEventWithTime = {
          ...currAdRes, 
          timestamp: new Date().getTime()
      };
        this.ads.push(ad);
        setTimeout(() => {
          const index = this.ads.findIndex(i => i.timestamp === ad.timestamp);
          this.ads.splice(index, 1);
        }, 5000);
      });
    }); 
  }
  
}
