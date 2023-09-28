import Header from './Header'
import Album from './Album'
import headphone from '../assets/headphone.png'
import FilterSongCategory from './FilterSongCategory'
import ListSong from './ListSong'
import { useState } from 'react'
import FAQs from './FAQs'
function Home() {

  const [filterGenre , setFilterGenre] = useState('all');

  const handleFilterGenre = (e)=>{
    setFilterGenre(e)
  }

  return (
    <>
      <Header/>

      <main className='bg-secondry'>
        {/*Hero Image*/}
        <section className='flex items-center justify-center bg-secondry w-full h-64'>
            <article className='flex w-3/4 h-2/3 justify-center'>
               <article className='flex flex-col items-center justify-center text-main text-3xl font-semibold'>
                <p className='text-center'>100 Thousand Song, ad-free</p>
                <p className='text-center'>Over thousand podcast episode</p>
               </article>
               <img src={headphone} />
            </article>
        </section>

        {/*Albums*/}
        <section className='bg-secondry'>
            {/*Top Albums*/}
            <article className='pb-8'>
              <Album category={"top"}/>
            </article>
            <article className='pb-8'>
            {/*New Albums*/}
              <Album category={"new"}/>
            </article>
        </section>

        {/*Songs*/}
        <section className='bg-secondry'>
            {/*Song Filter*/}
            <article className='mb-2'>
                <FilterSongCategory handleGenre={handleFilterGenre}/>
            </article>
            {/*List Song*/}
            <article>
                <ListSong filterGenre={filterGenre}/>
            </article>
        </section>

        {/*FAQs*/}
        <section className='bg-secondry pb-5'>
          <FAQs/>
        </section>
      </main>


    </>
  )
}


/*
  Prefered Api for data 
https://qtify-backend-labs.crio.do/albums/top
https://qtify-backend-labs.crio.do/albums/new
https://qtify-backend-labs.crio.do/album/:slug
https://qtify-backend-labs.crio.do/songs
https://qtify-backend-labs.crio.do/faq
https://qtify-backend-labs.crio.do/genres

*/

export default Home 