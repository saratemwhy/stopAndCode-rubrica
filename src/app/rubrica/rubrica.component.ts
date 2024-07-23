import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { RubricaSService } from '../services/rubrica-s.service';
import { ContactList, ContactDTO } from '../../models/rubrica-model';

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrl: './rubrica.component.css'
})
export class RubricaComponent {


  registrationForm!: FormGroup;
  
  ngOnInit(): void {

    this.registrationForm = new FormGroup ({

      tipologia: new FormControl ('', [
        Validators.required
      ]),
      
      nome: new FormControl({value: '', disabled: false}, [
        Validators.required,
        Validators.pattern("^[a-zA-Z]+$")
      ]),

      cognome: new FormControl({value: '', disabled: false}, [
        Validators.required,
        Validators.pattern("^[a-zA-Z]+([ \-']{0,1}[a-zA-Z]+){0,2}$")
      ]),

      ragioneS: new FormControl({value: '', disabled: false}, [
        Validators.required,
        Validators.pattern("^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+")
      ]),

      indirizzo: new FormControl('', [
        Validators.required
      ]),

      citta: new FormControl('', [
        Validators.required
      ]),

      provincia: new FormControl('', [
        Validators.required
      ]),

      cap: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]{5}$")
      ]),

      nazione: new FormControl('', [
        Validators.required
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      telefono: new FormControl('', [
        Validators.required,
        Validators.pattern('^[- +()0-9]+$')
      ]),
    })

    
  }
  
  
  contacts: ContactDTO[]= [];
  constructor( private rubricaService: RubricaSService) {}
  
  //mando i dati inseriti dall'utente al json server
    aggiungiLista() {
      if (this.registrationForm.valid) {
        this.rubricaService.newContact(this.registrationForm.value).subscribe(
          (res: ContactDTO) => {
            this.contacts.push(res);
          }
        );
      }
    }

    //disabilito il campo ragione sociale se la tipologia è persona fisica e quello del nome e del cognome se la tipologia è persona giuridica
    sceltaPersona(){
      if(this.registrationForm.get('tipologia')?.value=='personaF'){
        this.registrationForm.get('ragioneS')?.disable();
        this.registrationForm.get('nome')?.enable();
        this.registrationForm.get('cognome')?.enable();
      }else if (this.registrationForm.get('tipologia')?.value=='personaG'){
        this.registrationForm.get('ragioneS')?.enable();
        this.registrationForm.get('nome')?.disable();
        this.registrationForm.get('cognome')?.disable();
      }else {
        this.registrationForm.get('ragioneS')?.enable();
        this.registrationForm.get('nome')?.enable();
        this.registrationForm.get('cognome')?.enable();
      }
    }

  }

