import React from 'react'

const Card = (props) => {
    const post=props.post;
  return (
    <div className='my-2 font-semibold '>
        <h2 className='font-bold text-lg'>{post.title}</h2>
        <p className='text-[13px]'>By <span className='italic'>{post.author}</span>on   <span className=' underline decoration-dotted font-bold'> {post.category}</span></p>
        <p className='text-[13px] font-normal'>Posted on {post.date}</p>
        <p className='my-3 mb-6  text-md leading-5'>{post.content}</p>
       
        <p className='text-[12px] font-bold text-blue-600 underline flex gap-2'> {post.tags.map((tag,index) =>{
            return <span key={index} ># {tag}</span>
        })}</p>
    </div>
  )
}

export default Card