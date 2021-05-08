import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { NotificationComponent } from './notification.component';

@NgModule({
  declarations: [NotificationComponent],
  imports: [BrowserModule],
  exports: [NotificationComponent],
  providers: [NotificationService],
})
export class NotificationModule {}
