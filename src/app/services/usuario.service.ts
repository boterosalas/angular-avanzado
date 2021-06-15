import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap, map, catchError } from 'rxjs/operators';


import { registerForm } from '../interfaces/registerForm.interface';
import { environment } from '../../environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { Observable, of } from 'rxjs';

const baseUrl = environment.baseUrl;

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2: any;

  constructor(
    private http: HttpClient
  ) {
    this.googleInit();
  }

  logout() {
    localStorage.removeItem('token');
    this.auth2.signOut().then(() => {
      console.log('User signed out.');
    });
  }

  googleInit() {

    return new Promise(resolve => {

      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '641807944063-n1pned4g0tiab0hqvdpgj564a0rla014.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin'
        });
        resolve('');
      })

    })

  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    return this.http.get(`${baseUrl}/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
      }),
      map(res => true),
      catchError((error: any) => of(false))
    )
  }

  crearUsuario(formData: registerForm) {
    return this.http.post(`${baseUrl}/usuarios`, formData)
      .pipe(
        tap((res: any) => {
          localStorage.setItem('token', res.token)
        })
      )
  }

  login(formData: LoginForm) {
    return this.http.post(`${baseUrl}/login`, formData)
      .pipe(
        tap((res: any) => {
          localStorage.setItem('token', res.token)
        })
      )
  }

  loginGoogle(token: string) {
    return this.http.post(`${baseUrl}/login/google`, { token })
      .pipe(
        tap((res: any) => {
          localStorage.setItem('token', res.token)
        })
      )
  }
}
