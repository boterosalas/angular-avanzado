import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public titulo: string = '';
  public tituloSub$ = this.getArgumentosRuta().subscribe(({ titulo }) => {
    this.titulo = titulo;
    document.title = `AdminPro - ${titulo}`;
  });

  constructor(
    private router: Router
  ) {
    this.getArgumentosRuta();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    console.log('unsubscribe')
    this.tituloSub$.unsubscribe();
  }

  getArgumentosRuta() {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    )
  }

}
