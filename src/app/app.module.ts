import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { authFeatureKey, authReducer } from './auth/store/reducer';
import { LoginEffect, RegisterEffect, getCurrentUserEffect, redirectAfterLoginEffect, redirectAfterRegisterEffect } from './auth/store/effects';
import { AuthInterceptorInterceptor } from './shared/services/auth-interceptor.interceptor';
import { TopbarComponent } from './shared/components/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}), 
    EffectsModule.forRoot([]), 
    StoreModule.forFeature(authFeatureKey, authReducer),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      redirectAfterLoginEffect,
      redirectAfterRegisterEffect,
      getCurrentUserEffect,
    ]),    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
