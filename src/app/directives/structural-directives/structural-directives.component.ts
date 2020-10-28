import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  isVisible: boolean = false;
  isLoggedIn: boolean = false;
  color: string = '';

  dssv: any[] = [
    {hoTen: "Đặng Trung Hiếu", lop: 'FE48'},
    {hoTen: "Trương Tấn Khải", lop: 'FE49'},
    {hoTen: "Nguyễn Đức Dân", lop: 'FE50'}
  ]

  dshs: any[] | null = null

  constructor() {}

  ngOnInit(): void {}

  layDSHS() {
    this.dshs = [
      {hoTen: "Đặng Trung Hiếu", lop: 'FE48'},
      {hoTen: "Trương Tấn Khải", lop: 'FE49'},
      {hoTen: "Nguyễn Đức Dân", lop: 'FE50'}
    ]
  }
}
