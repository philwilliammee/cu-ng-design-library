import { NgModule } from '@angular/core';
import { CuNgDesignLibraryComponent } from './cu-ng-design-library.component';
import { SkipLinkComponent } from './components/layout/skip-link/skip-link.component';



@NgModule({
  declarations: [
    CuNgDesignLibraryComponent,
    SkipLinkComponent
  ],
  imports: [
  ],
  exports: [
    CuNgDesignLibraryComponent,
    SkipLinkComponent
  ]
})
export class CuNgDesignLibraryModule { }
