// import {inject} from '@angular/core'
// import {Actions, createEffect, ofType} from '@ngrx/effects'
// import {catchError, map, of, switchMap} from 'rxjs'
// import {authActions} from './actions'
// import { CurrenrUserIntarface } from 'src/app/shared/types/currentUserInterface'
// import { AuthService } from 'src/app/services/auth.service'

// export const RegisterEffect = createEffect(
//   (actions$ = inject(Actions), authService = inject(AuthService)) => {
//     return actions$.pipe(
//       ofType(authActions.register),
//       switchMap(({request}) => {
//         return authService.register(request).pipe(
//           map((currentUser: CurrenrUserIntarface) => {
//             return authActions.registerSucess({currentUser})
//           }),
//           catchError(() => {
//             return of(authActions.registerFailure())
//           })
//         )
//       })
//     )
//   }
// )


import { Injectable, Inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { authActions } from './actions';
import { CurrenrUserIntarface } from 'src/app/shared/types/currentUserInterface';
import { AuthService } from 'src/app/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistenceService } from 'src/app/shared/services/persistence.service';

@Injectable()
export class RegisterEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService
  ) {}

  register$ = createEffect(() => 
    this.actions$.pipe(
      ofType(authActions.register),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrenrUserIntarface) => {
            this.persistenceService.set('accessToken', currentUser.token)
            return authActions.registerSuccess({currentUser})
          }),
      
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.registerFailure({
                errors: errorResponse.error.errors,
              })
            )
          })
        )
      })
    )
    
  );

 
}
