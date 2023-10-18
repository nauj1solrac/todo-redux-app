import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  txtInpput: FormControl;

  constructor(private store: Store<AppState>){
    this.txtInpput = new FormControl('', Validators.required)

  }
  
  agregar(){
    if(this.txtInpput.invalid){
      return;
    }
    this.store.dispatch(actions.crear({texto: this.txtInpput.value}))
    this.txtInpput.reset();
  }
}
