import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private afs: AngularFirestore) { }

  saveCategory(data: string) {
    this.afs.collection('categories').add(data).then(ref => {
      console.log('success');
    });
  }

}
