import { ApplicationRef, Component, OnInit } from '@angular/core';
import { ToastNoAnimation, ToastPackage, ToastrService } from 'ngx-toastr';

@Component({
  selector:   'app-app-toast',
  template:   `
                  <article class="message is-primary animated fadeInRight"
                           [ngClass]="toastPackage.toastType">
                      <div class="message-body">
                          <div class="content">
                              <p *ngIf="toastPackage.title"><span *ngIf="toastPackage.toastType"
                                                                  class="icon"><i class="fas"
                                                                                  [ngClass]="iconClass"></i></span>
                                  <b>{{title}}</b></p>
                              <p>{{ message }}</p>
                          </div>
                      </div>
                  </article>
              `,
  animations: []
})
export class AppToastComponent extends ToastNoAnimation implements OnInit {

  constructor(protected toastrService: ToastrService, public toastPackage: ToastPackage, public appRef: ApplicationRef) {
    super(toastrService, toastPackage, appRef);
  }

  ngOnInit() {
  }

  public get iconClass() {
    let iconClass: string;
    switch (this.toastPackage.toastType) {
      case 'is-success':
        iconClass = 'fa-check-circle';
        break;
      case 'is-warning':
        iconClass = 'fa-exclamation-circle';
        break;
      case 'is-danger':
        iconClass = 'fa-exclamation-circle';
        break;
      case 'is-info':
        iconClass = 'fa-info-circle';
        break;
      default:
        iconClass = '';
        break;
    }
    return iconClass;
  }

}
