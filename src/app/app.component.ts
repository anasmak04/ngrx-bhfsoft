import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'state-management';


  constructor(private store : Store) { }


  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser());
  }
}
