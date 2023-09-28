import React from 'react'

const SongCard = ({id , likes , image , genre , title}) => {
    
  return (
    <div >
    <div className=" w-36 rounded-xl m-2 bg-white pb-1">
      <img
        className='w-full h-44 rounded-t-xl'
        src={image}
        title={title}
      />
      <div className='w-24 bg-black text-white text-xs ml-2 my-2 rounded-lg'>
        <button className='ml-2 p-1'>{(likes/1000).toFixed(1)}K Likes</button>
      </div>
    </div>
    <p className="text-xs text-left ml-2 text-white">{title}</p>
  </div>
  )
}

export default SongCard