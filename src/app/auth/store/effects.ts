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
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { authActions } from './actions';
import { CurrenrUserIntarface } from 'src/app/shared/types/currentUserInterface';
import { AuthService } from 'src/app/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { Router } from '@angular/router';

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
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrenrUserIntarface) => {
            // this.persistenceService.set('accessToken', currentUser.token);
            return authActions.registerSuccess({ currentUser });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.registerFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    )
  );
}

@Injectable()
export class LoginEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrenrUserIntarface) => {
            this.persistenceService.set('accessToken', currentUser.token);
            return authActions.loginSuccess({ currentUser });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.loginFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    )
  );
}

@Injectable()
export class redirectAfterRegisterEffect {
  constructor(private actions$: Actions, private router: Router) {}

  redirectAfterRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.registerSuccess),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
}

@Injectable()
export class redirectAfterLoginEffect {
  constructor(private actions$: Actions, private router: Router) {}

  redirectAfterRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.loginSuccess),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),

    { dispatch: false }
  );
}



@Injectable()
export class getCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.getCurrentUser),
      switchMap(() => {
        return this.authService.getCurretnUser().pipe(
          map((currentUser: CurrenrUserIntarface) => {
            return authActions.getCurrentUserSuccess({ currentUser });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.getCurrentUserFailure()
            );
          })
        );
      })
    )
  );
}