import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../../shared/types/BackendErrors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './mc-backend-error-messages.component.html',
  styleUrls: ['./mc-backend-error-messages.component.css']
})
export class McBackendErrorMessagesComponent implements OnInit {
  @Input() backendErrors: BackendErrorsInterface = {}

  errorMessages: string[] = []

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(' ')
      return `${name} ${messages}`
    })
  }

}
