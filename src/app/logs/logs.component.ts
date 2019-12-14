import { Component, OnInit } from '@angular/core';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.less'],
  providers:[]
})
export class LogsComponent implements OnInit {
  private adList = [];
  constructor(private adService: AdService) { }

  ngOnInit() {
    this.adService.observableList.subscribe(adList =>{
      console.log(adList);
      this.adList = adList;
    });
  }

}
