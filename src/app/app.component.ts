import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Carcassonne-game';


  constructor(private router: Router) { }

  navigateToStart() {
    this.router.navigate(['/game-start'])
  }

  navigateToRules() {
    this.router.navigate(['/rules'])
  }

}
