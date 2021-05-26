import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  private obs$: Observable<number> = new Observable(observer => {
    let i = 0;
    setInterval(() => {
      i++;
      observer.next(i)
    }, 1000)
  });

  private test$ = this.obs$.subscribe(valor => {
    console.log('valor: ', valor)
  })
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.test$.unsubscribe()
  }

}
