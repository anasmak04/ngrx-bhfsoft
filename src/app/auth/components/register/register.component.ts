import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/RegisterRequest.interface';
import { selectIsSubmitting } from '../../store/reducer';
import { AuthStateInterface } from '../../types/authStateInterface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username : ['',Validators.required],
    email : ['',Validators.required],
    password : ['',Validators.required],
  })

  isSubmitting$ = this.store.select(selectIsSubmitting)
  constructor(private fb : FormBuilder , private store : Store<{auth : AuthStateInterface}>,
    private authservice : AuthService
  ) {
   }


   onSubmit() {
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue(),
    };
  
    console.log(this.form.getRawValue());
    this.store.dispatch(authActions.register({request} ));
    this.authservice.register(request).subscribe(res => console.log('res' , res)); 
  }



 

}
