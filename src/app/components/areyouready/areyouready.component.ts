import { Component, HostListener } from '@angular/core';
import { Router, RouterModule, Scroll } from '@angular/router';

@Component({
  selector: 'app-areyouready',
  standalone: true,
  imports: [],
  templateUrl: './areyouready.component.html',
  styleUrl: './areyouready.component.css'
})
export class AreyoureadyComponent {


  constructor(private router:Router)
  {
    
  }

  goToCoachingOnline()
  {
    this.router.navigateByUrl("coaching-online");
  }
  


}
