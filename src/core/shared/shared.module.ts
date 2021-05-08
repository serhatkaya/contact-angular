import { LayoutModule } from '../layout/layout.module';
import { NgModule } from '@angular/core';
import { SharedBootstrapModule } from './shared-bootstrap.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'ngx-easy-table';

@NgModule({
  imports: [
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    SharedBootstrapModule,
    LayoutModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    SharedBootstrapModule,
    LayoutModule,
    TableModule,
  ],
})
export class SharedModule {}
