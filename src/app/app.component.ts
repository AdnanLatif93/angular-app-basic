import { Component } from '@angular/core';

@Component({
  //selector: '[app-root]', //attribute-selector
  //selector: '.app-root', //class-selector
  selector: 'app-root', //element-selector
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-basic';
  allowNewServer: boolean = false;
  serverCreationStatus = 'No Server was created!'
  hello() {
    alert('yes')
  }
  constructor() {
    setTimeout(() => {
      return this.allowNewServer = !this.allowNewServer
    }, 5000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'server was created!'
  }
}

//AppComponent is the root component that holds the entire application.
//AppComponent is the root component in which we latter added or nested our others component too.
//AppComponent is important component because in the end it is listed in the appModule in the bootstrap Array.
//Angular bootstrap the whole Application with this component.


//Component is just a class, a Typescript class.
//Angular is able to instantiate it to create object.
//create a export class that we can able to use outside of this file too. like we use it in AppModule file 
//@component is the angular feature which actually enhance this AppComponent class.
