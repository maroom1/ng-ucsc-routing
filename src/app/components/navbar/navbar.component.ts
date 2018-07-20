import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myVar:String='bar';

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onHome() {
    this.router.navigate(['']);
  }
  onRegister() {
    this.router.navigate(['register']);
  }
  onLogin() {
    this.router.navigate(['login']);
  }
  onSearch() {
    this.router.navigate(['foo',this.myVar,'search']);
  }

}
