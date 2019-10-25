import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { IboLibraryModule } from 'ibo-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

// import { FooterComponent } from './../../../../src/app/footer/footer.component';

const providers = [];

@NgModule({
    declarations: [
        AppComponent,
        View1Component,
        View2Component
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IboLibraryModule
    ],
    exports: [IboLibraryModule],
    providers,
    bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class IboPfServicesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppModule,
            providers,
        };
    }
}
