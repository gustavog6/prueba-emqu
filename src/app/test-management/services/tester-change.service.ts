import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesterChangeService {

  private _newTest = new BehaviorSubject<boolean>(false);

	onNewTest = () => this._newTest.asObservable();

	newTest(change: boolean) {
		this._newTest.next(change)
	}
}
