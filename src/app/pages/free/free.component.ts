import { Component } from '@angular/core';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { AreyoureadyComponent } from '../../components/areyouready/areyouready.component';

@Component({
  selector: 'app-free',
  standalone: true,
  imports: [HeaderModule,FooterModule,AreyoureadyComponent],
  templateUrl: './free.component.html',
  styleUrl: './free.component.css'
})
export class FreeComponent {

}
