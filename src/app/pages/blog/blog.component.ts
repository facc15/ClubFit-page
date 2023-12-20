import { Component } from '@angular/core';
import { HeaderModule } from '../../components/header/header.module';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeaderModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
