import { Component, Input } from '@angular/core';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { FaqItem } from '../../classes/faq-item';
import { CommonModule } from '@angular/common';
import { AreyoureadyComponent } from '../../components/areyouready/areyouready.component';

@Component({
  selector: 'app-training-plans',
  standalone: true,
  imports: [HeaderModule,FooterModule,CommonModule,AreyoureadyComponent],
  templateUrl: './training-plans.component.html',
  styleUrl: './training-plans.component.css'
})
export class TrainingPlansComponent {

  @Input() plan:string;

  faqItems :FaqItem[]= [
    { question: '¿Necesito ir a un gimnasio? ¿Es imprescindible tener membresía en un gimnasio?', 
      answer: '¡Claro que sí! Nuestros entrenamientos son como Netflix, pero para tu cuerpo. Necesitarás una membresía de gimnasio básico    para disfrutar del espectáculo. Los entrenamientos están diseñados para máquinas que se encuentran en cualquier gimnasio básico',expanded:false },
    { question: '¿Nunca fui a un gimnasio, puedo suscribirme igual?',
      answer: 'Bueno, te recomendamos que, al menos, sepas dónde está la barra y no la confundas con la máquina de café. Pero no te preocupes, todos empezamos alguna vez. Lo ideal es que tengas al menos 6 meses de experiencia.',expanded:false },
    { question: '¿Cuánto dura cada sesión de entrenamiento?',
      answer: 'Aproximadamente 1 episodio de tu serie favorita. Calculá unos 45-60 minutos, y eso sin contar el cardio, que es como los extras después de los créditos.',expanded:false },
    { question: '¿Cada cuánto se cambia el entrenamiento?',
    answer: 'Cambiamos más a menudo que tu mamá de novela turca. Cada 4 a 6 semanas, estamos listos para sorprenderte con algo nuevo.',expanded:false },
    { question: '¿Cómo es la comunicación con ALEJO?',
    answer: 'No es como mandarle un mensaje a tu crush y esperar una respuesta en 1 semana. En nuestro grupo de Facebook, Alejo estará ahí para resolver tus dudas y darte una mano con la técnica, like en tu foto. La aplicación también permite el contacto a través del chat privado para subir ejercicios, preguntas y respuestas.',expanded:false },
    { question: '¿Puedo hacer otros entrenamientos aparte de los del plan?',
    answer: 'Claro, siempre y cuando no quieras ser el héroe de una película de acción entre semana. Dale prioridad a nuestras sesiones, y si te sobra energía, hacé lo que quieras (pero sin arriesgar tu integridad).',expanded:false },
    { question: '¿El Coaching es personalizado?',
    answer: 'No, en el plan básico somos como amigos que se dan like pero no conversan mucho. Pero, si querés un trato más exclusivo, eso es cosa del plan PRO.',expanded:false },
    { question: '¿Se paga por mes?',
    answer: 'Pagar es más fácil que hacer una fila en la carnicería. Con débito automático, Mercado Pago, tarjeta de crédito o débito, es todo tan automático que casi parece magia. Y el monto se debita cada 30 días.',expanded:false },
    { question: '¿Si quiero cancelar mi suscripción después del plazo mínimo, cómo hago?',
    answer: 'Mandás un mail a soporte@clubfit.com.ar, le decís "chau" a la suscripción, y listo. Pero no hay vuelta atrás, es más definitivo que borrar un mensaje de WhatsApp.',expanded:false },
    { question: '¿Puedo seguir el programa si tengo lesiones o limitaciones físicas?',
    answer: 'Acá es como un club exclusivo de personas sin lesiones ni problemas, físicos. ¿Mentales? Varios. Eso sí, necesitás tener el "apto físico" para asegurarte de que tu cuerpo esté listo para la fiesta.',expanded:false },
    { question: '¿Qué sucede si no estoy satisfecho con el programa?',
    answer: 'Ofrecemos una garantía de satisfacción total de 7 días para el plan PRO. Como si fuera una devolución de compra en la verdulería. Si no estás feliz, chiflá y te devolvemos todo.',expanded:false },
    { question: '¿El programa incluye orientación sobre la dieta y nutrición?',
    answer: '¡Sí, señor! En el plan PRO, no solo te entrenamos, sino que también te contamos qué corno deberías poner en tu boca. Pero, si optás por el plan BÁSICO, solo nos encargamos de tus músculos, no de tu menú.',expanded:false },
 
  ];

  toggleAnswer(index: number): void {
    this.faqItems[index].expanded = !this.faqItems[index].expanded;
  }

  constructor()
  {
    this.plan="";
  }

}
