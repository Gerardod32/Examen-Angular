import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FacturaI } from '../../modelos/factura.interface';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  nuevoForm = new FormGroup({

    nombre: new FormControl(''),
    fecha: new FormControl(''),
    nit: new FormControl('')
  });
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  postForm(form: FacturaI) {
    this.api.postFactura(form).subscribe((data: any) => {
      console.log(data);
      this.nuevoForm.reset()
    });
  }


}
