import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Principal', path: '/' },
        { title: 'Progress', path: '/dashboard/progress' },
        { title: 'Grafica 1', path: '/dashboard/chart' },
        { title: 'RxJs', path: '/dashboard/rxjs' },
      ]
    }
  ];

  constructor() { }
}
