import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterModule, ROUTES} from '@angular/router';
import { PostsService } from './services/posts.service';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { Componente4Component } from './components/componente4/componente4.component';
import { Componente5Component } from './components/componente5/componente5.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { EmpleadoComponent } from './components/Empleado/empleado.component';
import { NavMesaComponent } from './components/shared/nav-mesa/nav-mesa.component';


@NgModule({
  declarations: [
  
    AppComponent,
    HomeComponent,
    NavbarComponent,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    Componente5Component,
    FooterComponent,
    EmpleadoComponent,
    NavMesaComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
