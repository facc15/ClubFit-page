import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ClubFit';

  constructor(private router:Router)
  {

  }

  ngOnInit()
  {
    this.router.navigateByUrl("home");
    //this.router.navigateByUrl("entrenamiento");
  }

  onActivate()
  {
    window.scroll(0,0);
  }

}
