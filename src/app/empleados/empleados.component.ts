import { Component } from '@angular/core';
import { EmpleadoComponent } from "../empleado/empleado.component";

@Component({
  selector: 'app-empleados',
  imports: [EmpleadoComponent],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

}
