import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './shared/headers/headers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pokemon/components/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { PokemonsService } from '../app/shared/services/pokemon/pokemons.service';
import { MatButtonModule } from '@angular/material/button';
import { CreateComponent } from './pokemon/components/create/create.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [PokemonsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
