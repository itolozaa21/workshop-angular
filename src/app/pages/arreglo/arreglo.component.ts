import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IUsuario } from './interfaces/usuario.interface';

@Component({
  selector: 'app-arreglo',
  templateUrl: './arreglo.component.html',
  styleUrls: ['./arreglo.component.scss']
})
export class ArregloComponent implements OnInit {

  public usuarios: IUsuario[] = [
    { correo : 'itolozaa@gmail.com' ,nombre: 'IVAN TOLOZA AYALA',  usuario: 'itolozaa21' },
    { correo : 'itolozaa@gmail.com' ,nombre: 'IVAN TOLOZA AYALA 1111',  usuario: 'itolozaa22' }
  ];

  usuario: IUsuario = { correo: '', usuario: '', nombre : '', edad: 0};
  search: string  = '';
  constructor(){

  }

  ngOnInit(): void {
  }

  guardar() {
    this.usuarios.push(this.usuario);
  }

  buscar(){
    this.usuarios = this.usuarios.filter((usario) => usario.usuario == this.search);
  }

  eliminar(usuario: string){
    this.usuarios = this.usuarios.filter((usario) => usario.usuario != usuario);
  }

}
