import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { es_ES, NZ_I18N } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Corrige esta importación
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ListadoProductosComponent } from './pages/listado-productos/listado-productos.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { BilleteraComponent } from './pages/billetera/billetera.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListadoProductosComponent,
    HeaderComponent,
    FooterComponent,
    ProductoComponent,
    AgregarProductoComponent,
    BilleteraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzGridModule,
    NzIconModule,
    NzFormModule,
    NzCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NzMessageModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
