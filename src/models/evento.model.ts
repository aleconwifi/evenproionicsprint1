export class Evento {

    constructor (
        public nombre: string,
        public descripcion: string,
        public fecha: string,
        public ubicacion: string,
        public organizador: string,
        public imagen?: string,
        public _id?: string
    ) { }

}