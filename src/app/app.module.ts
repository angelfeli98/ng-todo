import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ComponentModule } from './components/component.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    StoreDevtoolsModule.instrument({
      maxAge: 30,
      logOnly: environment.production
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
