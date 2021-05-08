import { NavMenuComponent } from './master-component/nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { MasterComponent } from './master-component/master-component.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [RouterModule],
  declarations: [MasterComponent, NavMenuComponent],
  exports: [MasterComponent],
})
export class LayoutModule {}
