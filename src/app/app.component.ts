import { Component } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {  } from 'rxjs/add/operator/map';

interface Message {
  admin_id: string;
  body: string;
  end_time: string;
  start_time: string;
  subject: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  msgscol: AngularFirestoreCollection<Message>;
  msgs: Observable<Message[]>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit(){
    this.msgscol = this.afs.collection('message');
    this.msgs = this.msgscol.valueChanges();
  }

}
