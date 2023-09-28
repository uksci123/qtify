export default function MediaCard({id , image  , title , follows , isVisible} ) {
  return (
    <div className={`${isVisible ? 'block' : 'hidden'}`}>
      <div className=" w-36 rounded-xl m-2 bg-white pb-1">
        <img
          className='w-full h-44 rounded-t-xl'
          src={image}
          title={title}
        />
        <div className='w-24 bg-black text-white text-xs ml-2 my-2 rounded-lg'>
          <button className='ml-2 p-1'>{(follows/1000).toFixed(1)}K Follows</button>
        </div>
      </div>
      <p className="text-xs text-left ml-2">{title}</p>
    </div>
  );
}