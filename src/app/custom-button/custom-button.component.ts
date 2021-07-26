import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.less']
})
export class CustomButtonComponent implements OnInit {

  @Input()
  text = 'template';
  @Input()
  color = 'red';

  constructor() { }

  ngOnInit(): void {
  }
}
