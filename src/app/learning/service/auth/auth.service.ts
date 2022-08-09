import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegister } from '../../model/auth.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

register(data:IRegister):Observable<IRegister>{
  return this.http.post<IRegister>(`${environment.server_url}/register`,data)
}

}

