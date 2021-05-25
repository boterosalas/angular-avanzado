import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public links: NodeListOf<Element> = document.querySelectorAll('.selector');

  constructor(
    private settintsService: SettingsService
  ) {
  }

  ngOnInit(): void {
    this.settintsService.changeCurrentTime();
  }

  changeTheme(theme: string) {
    this.settintsService.changeTheme(theme);
  }

}
