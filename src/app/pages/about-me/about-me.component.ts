import { Component } from '@angular/core';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports:[HeaderModule,FooterModule] ,
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
