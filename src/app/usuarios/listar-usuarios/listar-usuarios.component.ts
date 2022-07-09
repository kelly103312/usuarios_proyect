import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interface/usuario.interface';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  usuarios:Usuario[]= [];
  usuario:Usuario={
    id:         0,
    first_name: "",
    last_name:  "",
    email:      "",
    gender:     "",
    avatar:     ""
  };
  constructor(public serviceUser:UsuarioService) { }

  ngOnInit(): void {
    this.serviceUser.getUsuarios().subscribe(
      resp=>{
        this.usuarios = resp;
      }
    )
  }

}
