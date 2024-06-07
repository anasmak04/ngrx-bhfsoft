import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/RegisterRequest.interface";
import { CurrenrUserIntarface } from "src/app/shared/types/currentUserInterface";

export const authActions = createActionGroup({
    source : 'auth',
    events :  {
        Register :  props<{request : RegisterRequestInterface}>(),
        'Register Sucess' :  props<{currentUser : CurrenrUserIntarface}>(),
        'Register Failure' :  emptyProps(),
            
    }
  
})




// export const  register = createAction('[Auth] Register',
//  props<{request : RegisterRequestInterface}>())

//  export const  registerSuccess = createAction('[Auth] RegisterSuccess',
//  props<{request : RegisterRequestInterface}>())


//  export const  registerFailure = createAction('[Auth] registerFailure',
//  props<{request : RegisterRequestInterface}>())

 