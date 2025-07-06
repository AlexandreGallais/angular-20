import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public tsa = signal('');
  private t = toObservable(this.tsa).subscribe((x) => {
    console.log(x);
  });

  constructor() {
    this.tsa.set('toto');
  }
}
