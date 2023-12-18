import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socialFolio-angular-project';
  layout: string = "default-layout";

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.snapshot.root.firstChild?.routeConfig?.data?.["layout"];
        this.layout = currentRoute || 'default-layout';
        console.log('Current Layout:', this.layout);
      }
      console.log(event);
    })
  }
}
