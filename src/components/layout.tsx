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
            {children}
            <Footer/>
        </div>
    )
}