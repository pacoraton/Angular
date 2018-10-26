import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl:'./fruta.component.html'

})

export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja,Manzana,Pera, y Sandia';


    public nombre:string="Francisco Sandoval";
    public edad:number=25;
    public mayor_edad:boolean=true;
    public trabajos:Array<any>=["Carpintero","Albañil","Fontanero"];
    comodin:any="Cualquier cosa"
}

/*constructor(){
    this.nombre="Francisco Sandoval"
}*/