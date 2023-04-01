type TextProp={
    style:string,
    title:string|number,
    handleClick?:()=>void
}
export const Text=({
    title,
    style,
    handleClick
}:TextProp)=>{
    return(
        <h1 className={style} onClick={handleClick}>{title}</h1>
    )
}