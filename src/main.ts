import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  //whenever ng serve trigger it will rebuild our project into bundles 
  //first of all the script file executes and they're actually the first code to be executed.
  //these script will be added by angular CLI.
  //just to keep in mind it is the code, we write in main.ts file.


  //We pass the AppModule as argument and tell angular application bootstrap this AppModule first.
  //Now visit appModule
