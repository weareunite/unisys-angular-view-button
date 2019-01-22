import {NgModule} from '@angular/core';
import {UnisysAngularViewButtonComponent} from './unisys-angular-view-button.component';
import {CommonModule} from '@angular/common';
import {FilterVisibilityPipe} from './pipes/filter-visibility.pipe';
import {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  declarations: [
    UnisysAngularViewButtonComponent,
    FilterVisibilityPipe
  ],
  imports: [
    CommonModule,
    NgxPermissionsModule
  ],
  exports: [
    UnisysAngularViewButtonComponent,
    FilterVisibilityPipe
  ]
})
export class UnisysAngularViewButtonModule {
}
