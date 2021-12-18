import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { CarImage } from 'src/app/models/car-image';
import { ERROR, SUCCESS } from 'src/app/models/messages';
import { APIPATH, SIMPLEPATH } from 'src/app/models/paths';
import { ResponseModel } from 'src/app/models/response-model';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-add-car-image',
  templateUrl: './add-car-image.component.html',
  styleUrls: ['./add-car-image.component.css']
})
export class AddCarImageComponent implements OnInit {

  
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean = false;
  hasAnotherDropZoneOver: boolean = false;
  response: string = "";

  currentCarImage:CarImage
  carImages: CarImage[]
  constructor(private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getByCarId(params["carId"])
      this.initializeUploader()
    })
  }

  initializeUploader() {
    this.activatedRoute.params.subscribe(params => {
      this.uploader = new FileUploader({
        url: APIPATH + "carImages/add?carId=" + params["carId"],
        removeAfterUpload: true,
        allowedFileType: ["image"]
      });

      this.uploader.onSuccessItem = (item, response, status, headers) => {
        if (response) {
          let newResponse: ResponseModel = JSON.parse(response)
          this.toastrService.success(newResponse.message, SUCCESS)
          window.location.reload()
        }
      }

      this.uploader.onErrorItem = (item, response) => {
        if (response) {
          this.toastrService.error(response, ERROR)
        }
      }
    })
  }

  delete() {
    this.carImageService.delete(this.currentCarImage.id)
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  getByCarId(carId: number) {
    this.carImageService.getByCarId(carId).subscribe(response => {
      this.carImages = response.data
    })
  }

  setCurrentCarImage(carImage:CarImage)
  {
    this.currentCarImage=carImage
  }

  getImage(carImage: CarImage) {
    if(carImage)
    return SIMPLEPATH + carImage.imagePath
    else
    return ""
  }
}
