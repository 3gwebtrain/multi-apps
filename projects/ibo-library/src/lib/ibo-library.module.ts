import { NgModule } from '@angular/core';
import { IboLibraryComponent } from './ibo-library.component';
import { LibHeaderComponent } from './lib-header/lib-header.component';


@NgModule({
  declarations: [IboLibraryComponent, LibHeaderComponent],
  imports: [
  ],
    exports: [IboLibraryComponent, LibHeaderComponent]
})
export class IboLibraryModule { }
