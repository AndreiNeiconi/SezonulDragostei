import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private textSource = new BehaviorSubject<string>(
    'Viata fara dragoste este ca un copac fara flori sau roade" -Khalil Gibram'
  ); // default value
  currentText = this.textSource.asObservable();

  changeText(text: string) {
    this.textSource.next(text);
  }
}
