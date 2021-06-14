import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formSubmitted = false;

  public registerForm = this.fb.group({
    nombre: ['David', [Validators.required]],
    email: ['test1@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required]],
    password2: ['123456', [Validators.required]],
    terminos: [false, [Validators.required]],
  })

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  crearUsuario() {
    this.formSubmitted = true;
    if (this.registerForm.invalid || this.contrasenasNoValidas() || this.validarTerminos()) {
      return;
    }
    // Realizar el posteo
    this.usuarioService.crearUsuario(this.registerForm.value)
      .subscribe(res => {
        this.router.navigateByUrl('/dashboard')
      }, err => {
        console.warn(err.error.msg)
        Swal.fire('Error','El correo ya está registrado','error')
      })
  }

  contrasenasNoValidas(): boolean {
    const pass1 = this.registerForm.get('password')?.value
    const pass2 = this.registerForm.get('password2')?.value
    if ((pass1 !== pass2) && this.formSubmitted) {
      return true;
    }
    return false;
  }

  validarTerminos(): boolean {
    return !this.registerForm.get('terminos')?.value && this.formSubmitted
  }

  validarContrasena(): boolean {
    return !this.registerForm.get('password')?.value && this.formSubmitted
  }

  campoNoValido(campo: string): boolean {
    if (this.registerForm.get(campo)?.invalid && this.formSubmitted) {
      return true;
    }
    return false;
  }

}
