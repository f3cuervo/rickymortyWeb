import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.css']
})
export class HomePagesComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goList():void{
    this.route.navigateByUrl('/list')
  }

}
