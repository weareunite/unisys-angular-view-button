import {NgModule} from '@angular/core';
import {UnisysAngularViewButtonComponent} from './unisys-angular-view-button.component';
import {CommonModule} from '@angular/common';
import {FilterVisibilityPipe} from './pipes/filter-visibility.pipe';
import {NgxPermissionsModule} from 'ngx-permissions';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/home/', '.json');
}

@NgModule({
  declarations: [
    UnisysAngularViewButtonComponent,
    FilterVisibilityPipe
  ],
  imports: [
    CommonModule,
    NgxPermissionsModule.forChild(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  exports: [
    UnisysAngularViewButtonComponent,
    FilterVisibilityPipe
  ]
})
export class UnisysAngularViewButtonModule {
}
