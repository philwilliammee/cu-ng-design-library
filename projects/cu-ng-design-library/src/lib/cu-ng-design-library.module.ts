import { NgModule } from '@angular/core';
import { CuNgDesignLibraryComponent } from './cu-ng-design-library.component';
import { SkipLinkComponent } from './components/layout/skip-link/skip-link.component';
import { FooterComponent } from './components/layout/footer/footer.component';



@NgModule({
  declarations: [
    CuNgDesignLibraryComponent,
    SkipLinkComponent,
    FooterComponent,
  ],
  imports: [
  ],
  exports: [
    CuNgDesignLibraryComponent,
    SkipLinkComponent,
    FooterComponent,
  ]
})
export class CuNgDesignLibraryModule { }
