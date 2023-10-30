import { Component } from '@angular/core';

@Component({ //Esto es un decorador que transforma la clase en un componente de angular. Esta parte de aqui se podria decir que es la configuracion del este componente de angular
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Y esto es la clase de este componente, con sus propiedades y metodos
export class AppComponent {
  public title: string = 'Hola mundo';

}
