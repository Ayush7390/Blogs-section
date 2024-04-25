import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';
const Blogs = () => {
    const {posts,loading}=useContext(AppContext);


  return (
    
    <div className='flex flex-col items-center justify-center  mx-auto gap-[15px] my-20'>

{
    loading?(<Spinner/>):(
        posts.length===0?(
            <div>No post found</div>
        ):(
            
            posts.map((post)=>{
                {console.log(post)}
                return <Card key={post.id} post={post}/>
            })
        )
    )
}
    </div>
  )
}

export default Blogs