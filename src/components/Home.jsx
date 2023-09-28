import Header from './Header'
import Album from './Album'
import headphone from '../assets/headphone.png'
function Home() {
  return (
    <>
      <Header/>

      <main>
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
        <section>
            {/*Top Albums*/}
            <article>
              <Album/>
            </article>
            {/*New Albums*/}
            <article>
            </article>
        </section>

        {/*Songs*/}
        <section>
            <article></article>
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