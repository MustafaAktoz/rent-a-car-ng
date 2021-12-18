import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.css']
})
export class ListBrandComponent implements OnInit {

  brands:Brand[]
  currentBrand:Brand
  filterText:string
  constructor(private brandService:BrandService,
    private localStorageService:LocalStorageService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll()
  {
    this.brandService.getAll().subscribe(response=>{
      this.brands=response.data
    })
  }

  saveCurrentBrand(brand:Brand)
  {
    this.localStorageService.add("brand",JSON.stringify(brand))
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand
  }

  delete(){
    this.brandService.delete(this.currentBrand)
  }
  
}
