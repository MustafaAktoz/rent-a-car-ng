import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-list-color',
  templateUrl: './list-color.component.html',
  styleUrls: ['./list-color.component.css']
})
export class ListColorComponent implements OnInit {

  colors:Color[]
  currentColor:Color
  filterText:string
  constructor(private colorService:ColorService,
    private localStorageService:LocalStorageService
    ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll()
  {
    this.colorService.getAll().subscribe(response=>{
      this.colors=response.data
    })
  }

  saveCurrentColor(color:Color)
  {
    this.localStorageService.add("color",JSON.stringify(color))
  }

  setCurrentColor(color:Color){
    this.currentColor=color
  }

  delete(){
    this.colorService.delete(this.currentColor)
  }
}
