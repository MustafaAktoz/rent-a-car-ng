import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]
  currentColor:Color
  currentColorId:number=0

  filterText:string
  constructor(private colorService:ColorService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getAll()
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]) this.setCurrentColorId(params["colorId"])
    })
  }

  getAll()
  {
    this.colorService.getAll().subscribe(response=>{
      this.colors=response.data
    })
  }

  setCurrentColorId(colorId:number){
    this.currentColorId=colorId
  }

  getActiveCssClass(color:Color)
  {
    if(color==this.currentColor) return "active"
    
    return ""
  }

  filter()
  {
    if(this.currentColorId!=0) this.router.navigate(["cars/color/"+this.currentColorId])
    else this.router.navigate(["cars"])
  }

}
