import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme');

  constructor() {

    const theme = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href', theme)

  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.changeCurrentTime();
  }

  changeCurrentTime() {
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');
    links.forEach(elem => {
      elem.classList.remove('working')
      if (`./assets/css/colors/${elem.getAttribute('data-theme')}.css` === this.linkTheme?.getAttribute('href')) {
        elem.classList.add('working')
      }
    })
  }

}
