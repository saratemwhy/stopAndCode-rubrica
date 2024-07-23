import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactDTO, ContactList } from '../../models/rubrica-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RubricaSService {

  constructor(private http: HttpClient) { }

  //prendo i dati dal json server
  getContact (): Observable<ContactList[]> {
    return this.http.get<ContactList[]>("http://localhost:3000/contatti");
  }
  //mando i dati inseriti dall'utente al json server
  newContact(data: ContactList[]): Observable<ContactDTO> {
    console.log(data)
    return this.http.post<ContactDTO>("http://localhost:3000/contatti", data);
    
  }
  //ottengo i dettagli del contatto in base all'id
  getDetail (id:string): Observable<ContactList> {
    return this.http.get<ContactList>(`http://localhost:3000/contatti/${id}`);
  }

  deleteContact (id:string): Observable<ContactDTO>{    
    return this.http.delete<ContactDTO>(`http://localhost:3000/contatti/${id}`);
  }

}
