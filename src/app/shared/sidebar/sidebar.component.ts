import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[] = [];

  constructor(
    private sidebarService: SidebarService,
    private usuarioService: UsuarioService,
    private router: Router
  ) { 
    this.menuItems = this.sidebarService.menu;
  }

  ngOnInit(): void {
  }

  logout() {
    this.usuarioService.logout();
    this.router.navigateByUrl('login')
  }

}
