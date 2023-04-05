import { apiKey, baseUrl } from "./baseUrl"
import { FetchMovie } from "./fetch"
import { Text } from "./text"
import { FaSistrix } from "react-icons/fa";
import { FaHotjar,FaDesktop } from "react-icons/fa";

type layouteProp={
    title:string,
    subTitle:string,
    handleSubmit:(e: React.FormEvent<HTMLFormElement>)=>void,
    gen:{id:string,name:string}[],
    movieType:string,
    setLaoding:React.Dispatch<React.SetStateAction<boolean>>,
    setData:React.Dispatch<React.SetStateAction<[]>>,
}

export const HeadLayout =({
    title,
    subTitle,
    handleSubmit,
    gen,
    movieType,
    setData,
    setLaoding
}:layouteProp)=>{
    return(
        <div className="trendingPar mb-1">
                <div className="d-flex align-items-center mb-2">
                    {
                        movieType==="movies"?
                        <FaDesktop
                            color="palegreen"
                            size="1.5rem"
                            className="me-2"
                        />:
                        <FaDesktop
                            color="palegreen"
                            size="1.5rem"
                            className="me-2"
                        />
                    }
                    <Text
                        style="fs-4 fw-bold text-azure text-start"
                        title={title}
                    />
                </div>
                <Text 
                    style="fs-6 text-azure text-start"
                    title={subTitle}
                />
                <form 
                    className="my-3"
                    onSubmit={handleSubmit}
                >
                    <input  type="text" placeholder="enter your search" name="search" className="p-2 bg bg-dark"/>
                    <button 
                        className="btn btn-success text-azure btn-md p-2"
                    >
                        <FaSistrix/>
                    </button>
                </form>
                <div className="d-flex wrap mb-2">
                    {
                        gen?.map((item,index)=>{
                            const{
                                id,
                                name
                            }=item
                            return(
                                <Text
                                    key={index}
                                    title={name}
                                    style="badge p-2 text-azure lightgreen mt-1 me-2"
                                    handleClick={
                                        ()=> movieType==="movies"?
                                        FetchMovie(setData,`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${id}`, setLaoding):
                                        FetchMovie(setData,`${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=${id}`, setLaoding)
                                    }
                                />
                            )
                        })  
                    }
                </div>
            </div>
    )
}
