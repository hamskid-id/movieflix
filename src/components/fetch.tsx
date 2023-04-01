import axios from "axios"
import { baseUrl,apiKey } from "./baseUrl"

type set = React.Dispatch<React.SetStateAction<[]>>
type details = React.Dispatch<React.SetStateAction<{
    poster_path:string,
    original_title:string,
    overview:string,
    name:string,
    backdrop_path:string,
    genres:{id:number,name:string}[],
    status:string,
    release_date:string,
    runtime:number,
    vote_average:number
}>>
export const FetchMovie=async(setdata:set,url:string)=>{
    try{
        const response= await axios.get(url);
        const data= response?.data;
        console.log(data)
        setdata(data?.results)
    }catch(err){
        console.log(err);
    }
}

export const FetchDetails = async(setdata:details,url:string)=>{
    try{
        const response= await axios.get(url);
        const data= response?.data;
        setdata(data)
    }catch(err){
        console.log(err);
    }
}

export const FetchCast=async(setdata:set,url:string)=>{
    try{
        const response= await axios.get(url);
        const data= response?.data;
        setdata(data?.cast)
    }catch(err){
        console.log(err);
    }
}