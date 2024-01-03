import express, {Request, Response, NextFunction} from "express"
import { CreateVendorInput } from "../dto/Vendor.dto"

export const GetVendor = async( req:Request, res:Response, next:NextFunction)=>{

}

export const GetVendorById = async( req:Request, res:Response, next:NextFunction)=>{

}

export const CreateVendor = async( req:Request, res:Response, next:NextFunction)=>{
    const {name, ownerName, foodType, pinCode, address, email, password} = <CreateVendorInput>req.body
    return res.json({name, ownerName, foodType, pinCode, address, email, password})
}