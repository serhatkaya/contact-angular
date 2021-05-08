import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../../core/shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoginComponent],
  imports: [AuthRoutingModule, SharedModule],
})
export class AuthModule {}
