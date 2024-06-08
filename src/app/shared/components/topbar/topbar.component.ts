import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectCurrentUser } from 'src/app/auth/store/reducer';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {


  data$ = combineLatest({
    currentUser$ : this.store.select(selectCurrentUser),
  });

  
  constructor(private store : Store) { }

  ngOnInit(): void {

  }

}
