import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-component-interaction',
  // templateUrl: './component-interaction.component.html',
  template:`
  <h2> {{uni}} employs {{instructors.length}} instructors</h2>  
  <button (click)="anotherMethod()">Click to call child</button>
  <app-child-component #childComponent *ngFor="let instructor of instructors" [instructor]="instructor" [uni]="uni" (valueFromChaild)="handleChildInteraction($event)"></app-child-component>
  
  `,
  // template:`
  // <h2> {{uni}} employs {{instructors.length}} instructors</h2>  
  // <button (click)="childComponent.methodsToBeCalledByParent('#5#')">Click to call child</button>
  // <app-child-component #childComponent [instructor]="instructor" [uni]="uni" (valueFromChaild)="handleChildInteraction($event)"></app-child-component>
  
  // `,

  // template:`
  // <h2> {{uni}} employs {{instructors.length}} instructors</h2>  
  // <button (click)="childComponent.methodsToBeCalledByParent('#5#')">Click to call child</button>
  // <app-child-component *ngFor="let instructor of instructors" [instructor]="instructor" [uni]="uni" (valueFromChaild)="handleChildInteraction($event)"></app-child-component>
  
  // `,

  styleUrls: ['./component-interaction.component.css']

})

// Parent Component
export class ComponentInteractionComponent implements OnInit {

  @ViewChild(ChildComponentComponent)
  private myChild: ChildComponentComponent; 

  instructor={name: 'john'};
  instructors= [
      {name: 'john'},
  {name: 'vivek'},
{name: 'Emily'}
  ];

  uni = 'UCSC';

  handleChildInteraction(event){
    console.log(event);

  }

  anotherMethod() {
    this.myChild.methodsToBeCalledByParent("#5#");
  }
  constructor() { }

  ngOnInit() {
  }

}
