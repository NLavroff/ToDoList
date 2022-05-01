import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
//import { firestore } from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private afs: AngularFirestore, private toastr: ToastrService) { }

  saveTodo(id: string, data: any) {

    //this.afs.doc('categories/' + id).update({todoCount: firestore.FieldValue})

    this.afs.collection('categories').doc(id).collection('todos').add(data).then(ref => {
      this.toastr.success('La nouvelle tâche été ajoutée');
    });
  }

  loadTodos(id: string) {
    return this.afs.collection('categories').doc(id).collection('todos').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      })
    );
  }

}
