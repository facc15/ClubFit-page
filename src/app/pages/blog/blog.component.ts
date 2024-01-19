import { Component } from '@angular/core';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { Router } from '@angular/router';
import { AreyoureadyComponent } from '../../components/areyouready/areyouready.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeaderModule,FooterModule,AreyoureadyComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {


  constructor(private router:Router)
  {

  }



}
