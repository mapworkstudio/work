import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private urlID = new BehaviorSubject('1');
  sharedMessage = this.urlID.asObservable();

  constructor() { }

  nextMessage(urlID) {
    this.urlID.next(urlID);
    window.scrollTo(0, 0);
  }
 }
