import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { adDispatcher, IAdEvent } from 'ubimo-fed-home-assigment';

export interface IAdEventWithTime extends IAdEvent {
    timestamp: number;
    
}


@Injectable({
    providedIn: 'root'
})
export class AdService {
    private _adList: IAdEventWithTime[] = [];
    private _observableList: BehaviorSubject<IAdEventWithTime[]> = new BehaviorSubject([]);
    
    constructor(){
        adDispatcher.adEvents$.subscribe(adEvents$ => {
            this.add(adEvents$);
         });
    }

    get observableList(): Observable<IAdEventWithTime[]> { return this._observableList.asObservable() }
    get observableCurrAd(): Observable<IAdEvent> { return adDispatcher.adEvents$; }

    add(adEvent: IAdEvent) {
        const ad: IAdEventWithTime = {
            ...adEvent, 
            timestamp: new Date().getTime()

        };
        this._adList.push(ad);
        this._observableList.next(this._adList);
    }

}