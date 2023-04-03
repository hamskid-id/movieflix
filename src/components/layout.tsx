import { Header } from "../pages/header"
import { Footer } from "./footer"

type LayouteProp={
    children:React.ReactNode
}
export const Layout=({
    children
}:LayouteProp)=>{
    return(
        <div className="screen">
            <Header/>
            <div className="children pt-3">
                {children}
            </div>
            <Footer/>
        </div>
    )
}