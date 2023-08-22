import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './assignment#1/success-alert/success-alert.component';
import { WarningAlertComponent } from './assignment#1/warning-alert/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Bootstrap Array's object will tell angular application this is the 'AppComponent' you have to run on first.

//What is appModule?
//component uses to build different web pages and module uses to bundle different pieces.
//AppModule is the brain of the angular application that holds the entire information of the angular application
//AppModule give information which freature does app have and use.

//As you can see it also just an empty typescript exprt class, We transform it to something else by adding a decorator(@NgModule).
//In @NgModule there are four properties we setup on the objects {'decleration', 'imports', 'providers', 'bootstrap'} 

//Property => Bootsrap: Basically tell angular which component you should use at the time of application starts.
                    //  as well as which component you recognise in the index.html file.

//As we Know we do not add any new selector in the index.html file therefore we don't touch the boostrap Array.
//But still, we added a new component to angular and the new componet has to be registered in the @NgModule's ddeclarations array. 

