import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListadoFacturas } from '../../modelos/listado.interface';
import { FacturaI, FacturaInsert } from '../../modelos/factura.interface';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'https://localhost:44374/';

  constructor(private http: HttpClient) { }

  getaAllFacturas(): Observable<ListadoFacturas[]> {
    let direccion = this.url + "api/facturas";
    return this.http.get<ListadoFacturas[]>(direccion);
  }

  getSingleFactura(id: any): Observable<FacturaI> {
    let direccion = this.url + "api/facturas/" + id;
    return this.http.get<FacturaI>(direccion);
  }

  putFactura(form: FacturaI, id: any): Observable<FacturaI> {
    let direccion = this.url + "api/facturas/" + id;
    return this.http.put<FacturaI>(direccion, form);
  }

  deleteFactura(form: FacturaI, id: any): Observable<FacturaI> {
    let direccion = this.url + "api/facturas/" + id;
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body: form
    }
    return this.http.delete<FacturaI>(direccion, Options);
  }


  postFactura(form: FacturaInsert): Observable<FacturaInsert> {
    let direccion = this.url + "api/facturas";
    return this.http.post<FacturaInsert>(direccion, form);

  }

}
