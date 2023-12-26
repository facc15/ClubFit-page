import { Component } from '@angular/core';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeaderModule,FooterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
