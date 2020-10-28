import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {
  isActive: boolean = true
  isLoading: boolean = true

  color: string = 'red'
  message: string =
    '<span class="text-primary">Ok</span>'

  constructor() { }

  ngOnInit(): void {
  }

}
