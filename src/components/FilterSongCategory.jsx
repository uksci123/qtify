const FilterSongCategory = ({handleGenre}) => {
  return (
    <div className='flex flex-col mx-4  text-main'>
      <p className='text-lg text-semibold'>Songs</p>
      <div className='flex flex-row text-sm text-semibold '>
        <button onClick={()=>{handleGenre("all")}}className="hover:border-b-4 hover:border-primary hover:rounded-b-sm p-4 pr-8">All</button>
        <button onClick={()=>{handleGenre("rock")}}className="hover:border-b-4 hover:border-primary hover:rounded-b-sm p-4">Rock</button>
        <button onClick={()=>{handleGenre("pop")}}className="hover:border-b-4 hover:border-primary hover:rounded-b-sm p-4">Pop</button>
        <button onClick={()=>{handleGenre("jazz")}}className="hover:border-b-4 hover:border-primary hover:rounded-b-sm p-4">Jazz</button>
        <button onClick={()=>{handleGenre("blues")}}className="hover:border-b-4 hover:border-primary hover:rounded-b-sm p-4">Blues</button>
      </div>
    </div>
  )
}

export default FilterSongCategory