import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FacturaI } from '../../modelos/factura.interface';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activaterouter: ActivatedRoute, private router: Router, private api: ApiService) { }

  factura: FacturaI | any;
  editarForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    fecha: new FormControl(''),
    nit: new FormControl('d-MM-yyyy')
  })


  ngOnInit(): void {
    let facturaid = this.activaterouter.snapshot.paramMap.get('id');

    this.api.getSingleFactura(facturaid).subscribe((data: any) => {
      console.log(data);
      this.factura = data;
      this.editarForm.setValue({
        'id': facturaid,
        'nombre': this.factura.nombre,
        'fecha': this.factura.fecha,
        'nit': this.factura.nit
      })
      console.log(this.editarForm.value);
    })
  }
  postForm(form: FacturaI) {
    let facturaid = this.activaterouter.snapshot.paramMap.get('id');

    this.api.putFactura(form, facturaid).subscribe((data: any) => {
      console.log(data);
      console.log(facturaid);
    })
    console.log(form)
    this.router.navigate(['dashboard'])

  }
  eliminar() {
    let facturaid = this.activaterouter.snapshot.paramMap.get('id');
    let datos: FacturaI = this.editarForm.value;
    this.api.deleteFactura(datos, facturaid).subscribe((data: any) => {
      console.log(data);
    });
    console.log("eliminar");
    this.router.navigate(['dashboard']);
  }

  salir() {
    this.router.navigate(['dashboard'])
  }

}


