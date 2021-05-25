import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule, // path: 'dashboard'
    AuthRoutingModule // path: 'auth'
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
