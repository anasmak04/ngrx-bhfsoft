import {  createActionGroup, emptyProps, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/RegisterRequest.interface";
import { CurrenrUserIntarface } from "src/app/shared/types/currentUserInterface";
import { BackendErrorsInterface } from "src/app/shared/types/BackendErrors.interface";
import { LoginRequestInterface } from "../types/LoginRequest.ineterface";

export const authActions = createActionGroup({
    source : 'auth',
    events :  {
        Register :  props<{request : RegisterRequestInterface}>(),
        'Register Success' :  props<{currentUser : CurrenrUserIntarface}>(),
        'Register Failure' :  props<{errors : BackendErrorsInterface}>(),
        
        Login :  props<{request : LoginRequestInterface}>(),
        'Login Success' :  props<{currentUser : CurrenrUserIntarface}>(),
        'Login Failure' :  props<{errors : BackendErrorsInterface}>(),

        'Get Current User' :  emptyProps(),
        'Get Current User Success' :  props<{currentUser : CurrenrUserIntarface}>(),
        'Get Current User Failure' :  emptyProps(),
    },



  
})




// export const  register = createAction('[Auth] Register',
//  props<{request : RegisterRequestInterface}>())

//  export const  registerSuccess = createAction('[Auth] RegisterSuccess',
//  props<{request : RegisterRequestInterface}>())


//  export const  registerFailure = createAction('[Auth] registerFailure',
//  props<{request : RegisterRequestInterface}>())

 