import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Member {
  name: string;
  surname: string;
  email: string;
  phone: string;
  sex: string;
  age: number;
  job: string;
  location: string;
  photoUrl: string;
  details: string;
  createdAt: any;
}

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private membersCollection: AngularFirestoreCollection<Member>;

  constructor(private afs: AngularFirestore) {
    this.membersCollection = afs.collection<Member>('members');
  }

  addMember(member: Member) {
    return this.membersCollection.add(member);
  }

  getMembers(): Observable<Member[]> {
    return this.membersCollection.valueChanges({ idField: 'id' });
  }
}
