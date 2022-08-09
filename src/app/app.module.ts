import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './learning/modules/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './learning/modules/Home/components/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './learning/modules/shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
   
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
     BrowserAnimationsModule,
  
     StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
