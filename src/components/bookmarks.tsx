import { FaBookmark } from "react-icons/fa";
type BookProp={
    handleClick:()=>void
}
export const Bookmarks=({
    handleClick
}:BookProp)=>{
    return(
        <div className="bookmarks">
            <FaBookmark
                size="1.5rem"
                color="white"
                className="badge p-2 bg bg-primary"
                onClick={handleClick}
            />
        </div>
    )
}