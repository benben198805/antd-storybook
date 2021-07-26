import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-switch',
  templateUrl: './custom-switch.component.html',
  styleUrls: ['./custom-switch.component.less']
})
export class CustomSwitchComponent implements OnInit {

  @Input()
  openText = '开'

  @Input()
  closeText = '关'

  constructor() { }

  ngOnInit(): void {
  }

}
