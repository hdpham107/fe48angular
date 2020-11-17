import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "src/app/core/services/authentication.service";

// @Component: khai báo class AppComponent là 1 component
@Component({
  // selector: tên component để nhúng vào html
  selector: 'app-root',
  // templateUrl: liên kết file html vào trong component
  templateUrl: './app.component.html',
  // styleUrls: liên kết file scss vào trong component
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'fe48-angular';

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.initCurrentUser();
  }
}
