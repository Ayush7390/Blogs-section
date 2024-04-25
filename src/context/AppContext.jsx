import { createContext, useState } from "react";
import { baseUrl } from "../../baseURL";
export const AppContext= createContext();


export function AppContextProvider({children}){
    const [loading,setLoading]=useState(true);
    const [posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);

    async function fetchBlogPosts(page=1){
        setLoading(true);
        const url=`${baseUrl}?page=${page}`;
        try {
           const result=await fetch(url);
           const data =await result.json();
           
           setPage(data.page)
           setPosts(data.posts)
           setTotalPages(data.totalPages)
           setLoading(false);
        } catch (error) {
            console.log(error)
            
        }

    }

    

    const value={
        posts,setPosts,page,setPage,totalPages,setTotalPages,loading,setLoading,fetchBlogPosts
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}