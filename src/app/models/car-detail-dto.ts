import { CarImage } from "./car-image";

export interface CarDetailDto
{
    id:number
    name:string
    brandName:string
    colorName:string
    dailyPrice:number
    modelYear:number
    description:string
    findeksPoint:number
    carImages:CarImage[]
}