import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl:'./fruta.component.html'

})

export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja,Manzana,Pera, y Sandia';


    public nombre:string;
    public edad:number;
    public mayor_edad:boolean;
    public trabajos:Array<any>=["Carpintero","Albañil","Fontanero"];
    comodin:any="Cualquier cosa"


constructor(){
    this.nombre="Francisco Sandoval"
    this.edad=25;
    this.mayor_edad=true;
    console.log(this.trabajos);
    
    
}
//primer  metodo que se lanza despues del constructor
ngOnInit(){
   this.cambiarnombre();
   alert("hola mundo"+this.nombre)
}

holamundo(){
    
}

cambiarnombre(){
    this.nombre="Jose Ramirez";
}

}