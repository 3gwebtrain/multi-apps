import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IboPfServicesModule } from './../../projects/ibo-pf-services/src/app/app.module';
import { IboSetupConfig } from './../../projects/ibo-setup-config/src/app/app.module';


const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'ibo-pf-services'
    },
    {
        path: 'ibo-pf-services',
        loadChildren: () => import('./../../projects/ibo-pf-services/src/app/app.module').then(m => m.IboPfServicesModule)
    },
    {
        path: 'ibo-setup-config',
        loadChildren: () => import('./../../projects/ibo-setup-config/src/app/app.module').then(m => m.IboSetupConfig)
    }
];

@NgModule({
    imports: [
    RouterModule.forRoot(routes),
    IboPfServicesModule.forRoot(),
    IboSetupConfig.forRoot()
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
