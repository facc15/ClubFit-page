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
    this.router.navigateByUrl('pages/coaching-online');
  }
  goToAboutMe()
  {
    this.router.navigateByUrl('pages/quien-soy');
  }

  gotToTiendUp()
  {
    this.router.navigateByUrl('pages/tiend-up');
  }

  goToBlog()
  {
    this.router.navigateByUrl('pages/blogs');
  }

  goToFree()
  {
    this.router.navigateByUrl('pages/gratarola');
  }
}
