import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-polation',
  templateUrl: './inter-polation.component.html',
  styleUrls: ['./inter-polation.component.css']
})
export class InterPolationComponent implements OnInit {
  name: string = 'Inter-polation'

  constructor() { }

  ngOnInit(): void {
  }

}
