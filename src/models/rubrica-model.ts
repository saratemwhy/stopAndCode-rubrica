export interface ContactList {
    id: string;
    nome: string,
    cognome: string,
    ragioneS: string,
    indirizzo: string | number,
    citta: string,
    provincia: string,
    cap: number,
    nazione: string,
    email: string,
    telefono: number
}

export class ContactDTO {
    constructor(
        public id: string = "",
        public nome: string= "",
        public cognome: string = "",
        public ragioneS: string = "",
        public indirizzo: string | number = "",
        public citta: string = "",
        public provincia: string = "",
        public cap: number,
        public nazione: string = "",
        public email: string = "",
        public telefono: number
    ){
        
    }
}