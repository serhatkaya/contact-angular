import { UsersComponent } from './list/users.component';
import { SharedModule } from '../../core/shared/shared.module';
import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [UsersRoutingModule, SharedModule],
})
export class UsersModule {}
