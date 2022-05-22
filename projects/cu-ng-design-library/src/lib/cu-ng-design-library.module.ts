import { NgModule } from '@angular/core';
import { CuNgDesignLibraryComponent } from './cu-ng-design-library.component';
import { SkipLinkComponent } from './components/layout/skip-link/skip-link.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SubFooterComponent } from './components/layout/sub-footer/sub-footer.component';
import { MaterialModule } from './shared/modules/material/material.module';



@NgModule({
  declarations: [
    CuNgDesignLibraryComponent,
    SkipLinkComponent,
    FooterComponent,
    SubFooterComponent,
  ],
  imports: [
    MaterialModule,
  ],
  exports: [
    CuNgDesignLibraryComponent,
    SkipLinkComponent,
    FooterComponent,
    SubFooterComponent,
  ]
})
export class CuNgDesignLibraryModule { }
