import { Component, OnInit, OnChanges, DoCheck, 
                            AfterContentChecked, AfterContentInit, 
                            AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>

    <app-css></app-css>

    <app-clases></app-clases>

    <p [appResaltado]="'orange'">Hola Mundo</p>

    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, 
                                              AfterContentChecked, AfterContentInit, 
                                              AfterViewChecked, AfterViewInit, OnDestroy {

  constructor() { 
    console.log("Constructor")
  }

  ngOnInit() {
    console.log("ngOnInit")
  }
  
  ngOnChanges() {
    console.log("ngOnChanges")
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit")
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit")
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy")
  }
}
