import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { adDispatcher, IAdEvent } from 'ubimo-fed-home-assigment';

@Injectable({
    providedIn: 'root'
})
export class AdService {
    private _adList: IAdEvent[] = [];
    private _observableList: BehaviorSubject<IAdEvent[]> = new BehaviorSubject([]);
    
    constructor(private adService: AdService){
        adDispatcher.adEvents$.subscribe(adEvents$ =>{
            this.add(adEvents$);
         });
    }
    get observableList(): Observable<IAdEvent[]> { return this._observableList.asObservable() }
    get observableCurrAd(): Observable<IAdEvent> { return adDispatcher.adEvents$; }

    add(adEvent: IAdEvent) {
        this._adList.push(adEvent);
        this._observableList.next(this._adList);
    }

}