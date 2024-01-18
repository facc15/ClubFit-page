import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router:Router)
  {

  }

  goToCoaching()
  {
    this.router.navigateByUrl('coaching-online');
  }
  goToAboutMe()
  {
    this.router.navigateByUrl('quien-soy');
  }

  gotToTiendUp()
  {
    
  }

  goToBlog()
  {
    this.router.navigateByUrl('blogs');
  }

  goToFree()
  {
    this.router.navigateByUrl('gratarola');
  }
}
