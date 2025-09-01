import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  steps = [
    {
      icon: '🤝',
      title: 'Cunoasterea autentica',
      objective: 'Ne intalnim si stam de vorba sau interviu telefonic/video daca te afli la distanta.Te ascultăm cu atenţie pentru a înțelege cine eşti, ce cauți şi ce ai învătat din experientele tale. Emoțiile, valorile si dorințele tale sunt baza căutării. ',
      tasks:''
    },
    {
      icon: '👔',
      title: 'Creearea profilului tau personalizat',
      objective: `Stabilim impreuna ce iti doresti cu adevarat. Conturam un profil clar si sincer care reflecta ceea ce cauti intr-un partener. \n Acesta ne va ghida in tot procesul.`,
    },
    {
      icon: '🔍',
      title: 'Selectia atenta a parteneriilor compatibili',
      objective: 'Facem o triere, intervievam cu grija candidatii reali, compatibili cu tine. Evaluam aspecte esentiale precum valorile, emotiile, stilul de viata si intentiile.',
    },
    {
      icon: '🍷',
      title: 'Intalnirea cu persoana potrivita',
      objective: 'îți prezentăm doar persoane alese cu adevărat pentru tine. Organizăm întâlniri doar când simțim că există o potrivire reală și autentică, pe toate planurile.'
    },
    {
      icon: '📞',
      title: 'Feedback şi îndrumare',
      objective: 'Discutăm după fiecare întâlnire .Te ajutăm să înțelegi mai bine ce funcţionează şi ce nu. Fiecare pas este o lecţie, iar noi suntem alături de tine pentru a merge înainte cu încredere.',
    },
    {
      icon: '🤝',
      title: 'Evaluare finală şi recomandări personalizate',
      objective: 'Încheiem cu claritate şi înțelepciune. La finalul procesului, îţi oferim un rezumat sincer util al întregii experiențe, pentru a-ţi fi mai uşor în viitor.',
    }
  ];
}
