import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

import { ListadoFacturas } from '../../modelos/listado.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  facturas!: ListadoFacturas[];

  constructor(private api: ApiService, private activaterouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.api.getaAllFacturas().subscribe(data => {
      this.facturas = data;
    })
  }

  editarFactura(id: any) {
    this.router.navigate(['editar', id]);
  }

  nuevo() {
    this.router.navigate(['nuevo']);
  }

}
