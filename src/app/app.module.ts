import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormProfileComponent } from './dashboard/form-profile/form-profile.component';
import { ProfileComponent } from './views/profile/profile.component';
import { UnidadesComponent } from './views/unidades/unidades.component';
import { EquiposGPSComponent } from './views/equipos-gps/equipos-gps.component';
import { FormUnidadesComponent } from './dashboard/form-unidades/form-unidades.component';
import { FormEquiposGPSComponent } from './dashboard/form-equipos-gps/form-equipos-gps.component';
import { RealunidadesComponent } from './realtime/realunidades/realunidades.component';
import { NotpageComponent } from './components/notpage/notpage.component';
import { AgmCoreModule } from '@agm/core';
import {  SocketIoModule, SocketIoConfig } from 'ngx-socket-io'
import { environment } from 'src/environments/environment';

const config: SocketIoConfig={

  url: environment.wsUrl, options:{

  }
}

const appRoutes : Routes = [
  {
    path: '', component: LoginComponent },
    {path: 'dashboard',
    children:[
      { path: 'profile', component: FormProfileComponent},
      { path: 'unidades', component: FormUnidadesComponent},
      { path: 'equipos', component: FormEquiposGPSComponent},
    ]
  },
  {
    path: 'views',
    children:[
      { path: 'profile', component: ProfileComponent},
      { path: 'unidades', component: UnidadesComponent},
      { path: 'equipos', component: EquiposGPSComponent},
    ]

  },
  {
    path: 'gps',
    children:[
      { path: 'unidades', component: RealunidadesComponent},
    ]
  },
  {
    path: '**', component: NotpageComponent,
  },
  

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    UnidadesComponent,
    EquiposGPSComponent,
    FormProfileComponent,
    FormUnidadesComponent,
    FormEquiposGPSComponent, 
    RealunidadesComponent,
    NotpageComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    SocketIoModule.forRoot(config),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
