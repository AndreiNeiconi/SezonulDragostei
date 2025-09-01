import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
} from '@angular/fire/firestore';
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
  photoUrl: string; // we'll store the image link here
  details: string;
  createdAt: any;
}

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private firestore: Firestore) {}

  // Add member to Firestore
  addMember(member: Member) {
    const membersRef = collection(this.firestore, 'members');
    return addDoc(membersRef, member);
  }

  // Retrieve all members
  getMembers(): Observable<Member[]> {
    const membersRef = collection(this.firestore, 'members');
    return collectionData(membersRef, { idField: 'id' }) as Observable<
      Member[]
    >;
  }
}
