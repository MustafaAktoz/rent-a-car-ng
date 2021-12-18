import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ERROR } from '../models/messages';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(private toastrService:ToastrService) { }

  errorResponse(errorResponse:any){
      if (errorResponse.error.ValidationErrors) {
        for (let i = 0; i < errorResponse.error.ValidationErrors.length; i++) {
          this.toastrService.error(errorResponse.error.ValidationErrors[i].ErrorMessage, ERROR)
        }
      }
      else if (errorResponse.error.Message) {
        this.toastrService.error(errorResponse.error.Message, ERROR)
      }
      else {
        this.toastrService.error(errorResponse.error, ERROR)
      }
    
  }
}
