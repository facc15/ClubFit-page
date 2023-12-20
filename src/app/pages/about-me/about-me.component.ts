import { Component } from '@angular/core';
import { HeaderModule } from '../../components/header/header.module';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports:[HeaderModule] ,
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
