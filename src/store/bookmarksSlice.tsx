import { createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
type item={
    poster_path:string,
    id:number,
    vote_average:number,
    original_title:string,
    release_date:string,
    type:string
}
type payloadAction={
    payload:item
}
type IniialType={
    bookContent: item[]
}

const bookmarks_Slice = createSlice({
    name:'bookmark',
    initialState: {
        bookContent: localStorage.getItem('movie-bookmarked') ? JSON.parse(localStorage.getItem('movie-bookmarked')||'{}'):[],
    } as IniialType,
    reducers:{
        addToBookmarked(state:any,action:payloadAction){
            const{
                id,
            }=action.payload;
            const existingItem = state.bookContent.find((item:item) => item.id === id)

            if(existingItem){
               toast('Movie added  to bookmarks',{
                position:"bottom-left"
               })
            }else{
                toast('Movie Bookmarked',{
                    position:"bottom-left",
                });
                state.bookContent.push(action.payload);
            }
            localStorage.setItem('movie-bookmarked',JSON.stringify(state.bookContent));
        },
    },
});

export const bookActions = bookmarks_Slice.actions;
export default bookmarks_Slice;