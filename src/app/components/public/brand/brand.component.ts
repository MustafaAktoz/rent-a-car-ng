import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  filterText:string
  brands:Brand[]
  currentBrandId:number=0
  constructor(private brandService:BrandService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll() 
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]) this.setCurrentBrandId(params["brandId"])
    })
  }

  getAll()
  {
    this.brandService.getAll().subscribe(response=>{
      this.brands=response.data 
    })
  }

  setCurrentBrandId(brandId:number){
    this.currentBrandId=brandId
  }

  filter()
  {
    
    if(this.currentBrandId!=0) this.router.navigate(["cars/brand/"+this.currentBrandId])
    else this.router.navigate(["cars"])

  }
  
}
