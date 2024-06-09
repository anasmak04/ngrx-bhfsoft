import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: '<div> class="error-message">{{message}}</div>',
})
export class ErrorMessageComponent implements OnInit {


  @Input() message : string = 'Something went wrong'
  constructor() { }

  ngOnInit(): void {
  }

}
