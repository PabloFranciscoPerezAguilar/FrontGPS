import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStauts=false;
  constructor(
    private socket:Socket,

  ) { 
    this.checkStatus();
  }


  checkStatus(){
    console.log("entra checkStatus")
    this.socket.on('connect',()=>{
      console.log("Conectado");
      this.socketStauts=true;
    });

    this.socket.on('disconnect',()=>{
      console.log("no Conectado");
      this.socketStauts=false;
    });
  }
}