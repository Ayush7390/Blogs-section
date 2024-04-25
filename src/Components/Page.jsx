import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Page = () => {
  const {page,totalPages,setPage,fetchBlogPosts}=useContext(AppContext);
  return (
    <div className='w-full border-t-[2px] flex justify-center items-center fixed bottom-0  bg-white '>
    <div className='flex w-11/12 max-w-[560px] justify-between my-4 '>
      <div className=' flex gap-4 '>
     
        {page>1&& 
        <button className='border py-1 px-2 border-black rounded-md ' onClick={()=>{
          setPage((page)=>{
            const newPage=page-1;
          fetchBlogPosts(page-1);
          return newPage;
          })
        }}>Previous</button>}
        
        {page<totalPages&& 
        
        <button className='border py-1 px-2 border-black rounded-md ' onClick={()=>{
          setPage((page)=>{
            const newPage=page+1;
            fetchBlogPosts(page+1);
            return newPage;
          })
        }}>Next</button>}
      </div>

      <p className='font-bold text-sm'>Page {page} of {totalPages} </p>
      
    </div>
    </div>
  )
}

export default Page