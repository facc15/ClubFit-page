import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { AreyoureadyComponent } from '../../components/areyouready/areyouready.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports:[FormsModule,CommonModule,HeaderModule,FooterModule,AreyoureadyComponent] ,
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit{


  public days!:number;
  public minutes!:number;
  public hours!:number;
  public seconds!:number;
  public diferencia!:Date;


  constructor(private renderer: Renderer2)
  {
    this.days=0;
  }


  ngOnInit()
  {

    this.renderer.listen("document",'DOMContentLoaded', ()=> {
      // Define la fecha de inicio
      const fechaInicio:Date = new Date('2024-01-08T00:00:00');
    
        console.log("entramo "); 
    
      // Actualiza el contador cada segundo
      setInterval(()=> {
        var ahora = new Date();
        var diferencia  = fechaInicio.getTime() - ahora.getTime();

        var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    
        // Actualiza los elementos HTML con los valores calculados
        this.days=dias;
        this.hours=horas;
        this.minutes=minutos;
        this.seconds=segundos;
      }, 1000);
  
      const links = document.querySelectorAll('.faq-list a');
      const questionToggles = document.querySelectorAll('.question-toggle');
      const respuestas = document.querySelectorAll('.respuesta');
    
  
      
      });
  
  
  }




}
