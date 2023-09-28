import axios from 'axios'
import {useEffect, useState} from 'react'
import SongCard from './SongCard'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';

const ListSong = ({filterGenre}) => {
    const [song , setSong] = useState([])
    const [filterSong , setFilterSong] = useState([])

    const url = `https://qtify-backend-labs.crio.do/songs` 
    useEffect(()=>{
      (async()=>{
        const result = await axios.get(url)
        setSong(result.data)
        setFilterSong(result.data)
      })()
    },[])

    useEffect(()=>{
      if(filterGenre==='all'){
        setFilterSong(song)
      }else{
        let filtered_ = song.filter((item)=>item.genre.key === filterGenre)
        setFilterSong(filtered_)
      }
    },[filterGenre])

    console.log(filterGenre)

  return (
      <div className='mx-4'>
        <Carousel 
          showThumbs={false} // Disable thumbs
          showStatus={false}
          emulateTouch={true}
          width="100%" // Set the width of the carousel container
          slidesToShow={7} // Set the number of slides to show at once
          centerMode={true} // 
          centerSlidePercentage={100/7} // Adjust the center slide width percentage 
          showIndicators={false}
        >
            {
              filterSong.map((item)=>{
                return (
                  <div key={item.id}>
                  <SongCard
                    id={item.id}
                    likes={item.likes}
                    image={item.image}
                    genre={item.genre.key}
                    title={item.title}
                    filterGenre={filterGenre}
                  />
                  </div>
                )
              })
            }
        </Carousel>
      </div>
  )
}

export default ListSong