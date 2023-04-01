type ButtonProp={
    style:string,
    title:string,
    handleClick?:()=>void
}
export const Btn=({
    style,
    title,
    handleClick
}:ButtonProp)=>{
    return(
        <button 
            className={style}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}