import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

export interface IProject {
  name: string,
  img:string,

}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  searchvalue:string =''

  product: IProject[]= [
    {name: 'Web', img: '../../assets/1.jpg'},
    {name: 'Print', img: '../../assets/2 (1).jpg'},
    {name: 'Branding', img: '../../assets/3.jpg'},
    {name: 'Ux Design', img: '../../assets/4.jpg'},
    {name: 'Ux Design', img: '../../assets/5.jpg'},
    {name: 'web', img: '../../assets/6.jpg'},
  ]

 



  constructor() { }

  ngOnInit(): void {
  }

}
