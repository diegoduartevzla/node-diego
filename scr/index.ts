//importo Modulos

import express, {Application} from 'express'; 

// defino la clase para el server
class ServerDiego{
// toda app web debe tener -> servicio + puerto

app: Application;
port: any;
constructor(){
// aqui empezamos la app
this.app = express();
this.port = process.env.port || 3000;

}
iniciar(): void {

    this.app.listen(this.port, () =>{

        console.log('servicio corriendo en el puerto: 3004 ', this.port);
    });

}
}
// iniciar Objetos ....
const serverDiego = new ServerDiego();
/// correo el servidor, con la funcion iniciar
export default serverDiego.iniciar();