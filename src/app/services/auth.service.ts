import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RegisterRequestInterface } from '../auth/types/RegisterRequest.interface';
import { Observable, map } from 'rxjs';
import { currenrUserIntarface } from '../shared/types/currentUserInterface';
import { authResponseIntarface } from '../auth/types/authResponse.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  
  constructor(private http : HttpClient) { }

  register(data : RegisterRequestInterface) : Observable<currenrUserIntarface>{
    const url = environment.apiUrl + '/users'
    return this.http.post<authResponseIntarface>(url,data).pipe(map(response => response.user))
  }

}

