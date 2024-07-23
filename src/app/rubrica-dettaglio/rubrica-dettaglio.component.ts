import { Component } from '@angular/core';
import { ContactDTO, ContactList } from '../../models/rubrica-model';
import { RubricaSService } from '../services/rubrica-s.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rubrica-dettaglio',
  templateUrl: './rubrica-dettaglio.component.html',
  styleUrl: './rubrica-dettaglio.component.css'
})
export class RubricaDettaglioComponent {
  contactD?: ContactList;
  
  //mando i dati del json server alla pagina web
  constructor( private rubricaService: RubricaSService, private route: ActivatedRoute) {}
  
  
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')!;
      if (id) {
        this.rubricaService.getDetail(id).subscribe(
          (d: ContactList) => {
            this.contactD = d;
          }
        );
      }
    }
    
    
}
