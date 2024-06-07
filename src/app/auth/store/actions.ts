import {  createActionGroup, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/RegisterRequest.interface";
import { CurrenrUserIntarface } from "src/app/shared/types/currentUserInterface";
import { BackendErrorsInterface } from "src/app/shared/types/BackendErrors.interface";

export const authActions = createActionGroup({
    source : 'auth',
    events :  {
        Register :  props<{request : RegisterRequestInterface}>(),
        'Register Success' :  props<{currentUser : CurrenrUserIntarface}>(),
        'Register Failure' :  props<{errors : BackendErrorsInterface}>(),
            
    }
  
})




// export const  register = createAction('[Auth] Register',
//  props<{request : RegisterRequestInterface}>())

//  export const  registerSuccess = createAction('[Auth] RegisterSuccess',
//  props<{request : RegisterRequestInterface}>())


//  export const  registerFailure = createAction('[Auth] registerFailure',
//  props<{request : RegisterRequestInterface}>())

 