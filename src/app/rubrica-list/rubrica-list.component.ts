import { Component, OnInit } from '@angular/core';
import { RubricaSService } from '../services/rubrica-s.service';
import { ContactDTO, ContactList } from '../../models/rubrica-model';

@Component({
  selector: 'app-rubrica-list',
  templateUrl: './rubrica-list.component.html',
  styleUrl: './rubrica-list.component.css'
})
export class RubricaListComponent implements OnInit{

  contact: ContactList[] = [];
  cL: ContactDTO[] = [];
  
  //mando i dati del json server alla pagina web
  constructor( private rubricaService: RubricaSService) {}
  
  ngOnInit(): void {
    this.rubricaService.getContact().subscribe(data =>{
      this.contact=data;
    })
  }

  //cancello contatto quando clicco su elimina
  cancellaContatto(id:string){
        this.rubricaService.deleteContact(id).subscribe(
          (r: ContactList): void => {
            this.contact.splice((Number(r.id)),1)
          }
        );
  } 
 

}
