import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IboPfServicesModule } from './../../projects/ibo-pf-services/src/app/app.module';
import { IboSetupConfig } from './../../projects/ibo-setup-config/src/app/app.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IboPfServicesModule.forRoot(),
        IboSetupConfig.forRoot()
    ],
    exports: [FooterComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
