import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';
import { Observable } from "rxjs";
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private url: string = 'http://localhost:8000';
  private socket: any;

  sendMessage(message: string, username: string) {
    this.socket.emit('addMessage', message, username);
  }

  getMessages() {
    return new Observable((observer: any) => {
      this.socket = io(this.url);
      this.socket.on('message', (data: any) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });
  }

  setUsername(username: string) {
    console.log('username set', username);
    sessionStorage.setItem('username', username);
  }

  getUsername() {
    return sessionStorage.getItem('username');
  }
}
