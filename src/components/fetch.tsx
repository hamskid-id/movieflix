import axios from "axios"

type set = React.Dispatch<React.SetStateAction<[]>>
type loading = React.Dispatch<React.SetStateAction<boolean>>
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
export const FetchMovie=async(setdata:set,url:string,SetloadingState:loading)=>{
    try{
        SetloadingState(true);
        const response= await axios.get(url);
        const data= response?.data;
        console.log(data)
        setdata(data?.results)
        SetloadingState(false);
    }catch(err){
        SetloadingState(false);
        console.log(err);
    }
}

export const FetchDetails = async(setdata:details,url:string,SetloadingState:loading)=>{
    try{
        SetloadingState(true);
        const response= await axios.get(url);
        const data= response?.data;
        setdata(data)
        SetloadingState(false);
    }catch(err){
        SetloadingState(false);
        console.log(err);
    }
}