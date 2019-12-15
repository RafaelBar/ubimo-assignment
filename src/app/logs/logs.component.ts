import { Component, OnInit } from '@angular/core';
import { AdService, IAdEventWithTime } from '../ad.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.less']
})


export class LogsComponent implements OnInit {
  private title: string = "Ads List";
  private adList: Observable<IAdEventWithTime[]>;
  ads: IAdEventWithTime[] = [];
  
  constructor(private adService: AdService) {
  }
  
  ngOnInit() {
   this.adList = this.adService.observableList;
  }
}
