import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-list-pages',
  templateUrl: './list-pages.component.html',
  styleUrls: ['./list-pages.component.css']
})
export class ListPagesComponent implements OnInit {

  private API_URL = 'https://rickandmortyapi.com/api/character'
  personajes:any[]= []
  next:string = '';
  prev:string=''
  loader:boolean = true
  constructor(private characterService:CharactersService) { }
  

  ngOnInit(): void {
    this.loadChars(this.API_URL)
  }

  loadChars(url:string){
    this.characterService.getAllCharacteres(url).subscribe(data=>{
      this.next = data.info.next
      this.prev = data.info.prev
      this.personajes = data.results
      this.loader = false
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }

}
