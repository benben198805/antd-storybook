import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-tag',
  templateUrl: './custom-tag.component.html',
  styleUrls: ['./custom-tag.component.less']
})
export class CustomTagComponent implements OnInit {
  @Input()
  color = "magenta"
  @Input()
  text = "magenta"

  constructor() { }

  ngOnInit(): void {
  }
}
