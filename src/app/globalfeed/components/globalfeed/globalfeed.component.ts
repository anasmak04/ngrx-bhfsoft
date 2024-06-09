import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-globalfeed',
  templateUrl: './globalfeed.component.html',
})
export class GlobalfeedComponent implements OnInit {



  apiUrl = '/articles';
  constructor() { }

  ngOnInit(): void {
  }

}
