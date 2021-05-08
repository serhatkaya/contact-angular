import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
    <toastr-notification></toastr-notification> `,
})
export class AppComponent {}
