import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { IboLibraryModule } from 'ibo-library';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IboLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const providers = [];

@NgModule({})
export class IboSetupConfig {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppModule,
            providers: providers,
        };
    }
}
