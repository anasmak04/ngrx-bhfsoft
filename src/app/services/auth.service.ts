import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RegisterRequestInterface } from '../auth/types/RegisterRequest.interface';
import { Observable, map } from 'rxjs';
import { CurrenrUserIntarface } from '../shared/types/currentUserInterface';
import { AuthResponseIntarface } from '../auth/types/authResponse.interface';
import { environment } from 'src/environments/environment';
import { LoginRequestInterface } from '../auth/types/LoginRequest.ineterface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  
  constructor(private http : HttpClient) { }

  getUser(response : AuthResponseIntarface) : CurrenrUserIntarface{
    return response.user
  }


  getCurretnUser() : Observable<CurrenrUserIntarface>{
    const url = environment.apiUrl + '/user'
    return this.http.get<AuthResponseIntarface>(url).pipe(
      map(this.getUser)
    )
  }

  register(data : RegisterRequestInterface) : Observable<CurrenrUserIntarface>{
    const url = environment.apiUrl + '/users'
    return this.http.post<AuthResponseIntarface>(url,data).pipe(
      map(this.getUser)
    )
  }



  login(data : LoginRequestInterface) : Observable<CurrenrUserIntarface>{
    const url = environment.apiUrl + '/users/login'
    return this.http.post<AuthResponseIntarface>(url,data).pipe(
      map(this.getUser)
    )
  }

  

}

