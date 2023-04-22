import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';      //headers metodo post respuesta    client respuesta del cliente 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  //crear una variable para asignarle la url del servidor
  baseurl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  //crear la instancia 
  resgister(name: string, email: string, password: string): Observable<any> {
    return this.http.post(
      `${this.baseurl}/api/register/`,
      { name, email, password },
      { headers: this.httpHeaders }
    );
  }

  //crear metodo para login 
  login(email: string, password: string): Observable<any> {
    return this.http.post(
      `${this.baseurl}/api/login/`,
      { email, password },
      { headers: this.httpHeaders }
    );
  }
  //metodo para consumir el metodo get
  getCurrentUser(id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });

    return this.http.get(`${this.baseurl}/api/users/show/` + id, { headers });
  }

  //metodo para verificar que hay sesion iniciada
  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token;
  }

  //metodo de logout
  logout(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });

    return this.http.delete(
      `${this.baseurl}/api/logout/`,
      { headers }
    );
  }

  

}
