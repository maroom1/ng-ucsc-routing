import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  // templateUrl: './child-component.component.html',
  template: `<h1> Roster of Instructions</h1>
  <h3> Instructor Name: {{instructor.name}}</h3>
  <h2> Bio: I am {{instructor.name}} from {{universityName}}</h2>
  <input type="text" #myNickName>Type a Nick Name
  <button (click)="interactWithParent(myNickName.value)">Click me</button>

  `,
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() instructor;
  @Input('uni') universityName;

  @Output() valueFromChaild= new EventEmitter<string>();

  interactWithParent(nickName:string):void {
    this.valueFromChaild.emit(nickName);
  }

  methodsToBeCalledByParent(valueFromParent) {
    console.log('called from parent with value'+valueFromParent);
  }
  constructor() { }

  ngOnInit() {
  }

}
