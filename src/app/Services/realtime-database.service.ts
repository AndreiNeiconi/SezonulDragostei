import { Injectable } from '@angular/core';


export interface Message{
  message: string;
  time: string;
  date: string;
}


@Injectable({
  providedIn: 'root'
})
export class RealtimeDatabaseService {

  constructor() { }
}
