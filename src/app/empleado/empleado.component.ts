import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  imports: [FormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  private nombre: string = "Juan";
  private apellido: string = "Díaz";
  private edad: number = 18;
  private empresa: string = '';
  private usuRegistrado: boolean = false;
  nacionalidad: string = 'Española';

  public getNombre(): string {
    return this.nombre;
  }
  public getApellido(): string {
    return this.apellido;
  }
  public getEdad(): number {
    return this.edad;
  }
  public getEmpresa(): string {
    return this.empresa;
  }
  public getUsuRegistrado(): boolean {
    return this.usuRegistrado;
  }
  public getNacionalidad(): string {
    return this.nacionalidad;
  }
  public setEmpresa(event: Event) {
    this.empresa = (<HTMLInputElement>event.target).value;
  }
  public setUsuRegistrado(event: Event) {
    if ((<HTMLInputElement>event.target).value=='si'){
      this.usuRegistrado = true;
    }else{
      this.usuRegistrado = false;
    }
  }
  
}
