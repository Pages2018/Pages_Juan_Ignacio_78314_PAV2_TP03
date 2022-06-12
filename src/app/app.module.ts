import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';  
import {MenuComponent} from './components/menu/menu.component';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InicioComponent} from './components/inicio/inicio.component';
import { ArticulosFamiliasComponent} from './components/articulos-familias/articulos-familias.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([{path:'menu', component: MenuComponent},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'articulosfamilias', component: ArticulosFamiliasComponent }
  ])
],
  declarations: [MenuComponent, AppComponent, HelloComponent, InicioComponent, ArticulosFamiliasComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
})
export class AppModule { }
