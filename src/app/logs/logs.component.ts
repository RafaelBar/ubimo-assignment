import { Component, OnInit, NgZone } from '@angular/core';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.less']
})


export class LogsComponent implements OnInit {
  
  private adList = [];
  constructor(private adService: AdService,
  private ngZone: NgZone) { }
  
  ngOnInit() {
    this.adService.observableList.subscribe(adList => {
      this.ngZone.run(() => {
        this.adList = adList;
        console.log(this.adList);
      });
      
    });
  }

}
