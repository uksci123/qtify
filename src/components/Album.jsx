import axios from 'axios'
import { useState, useEffect } from 'react'
import MediaCard from './MediaCard'
import { Carousel } from 'react-responsive-carousel';

const Album = ({ category }) => {

    const [albumData, setAlbumData] = useState([])
    const url = `https://qtify-backend-labs.crio.do/albums/${category}`;
    console.log(url)
    useEffect(() => {
        (async () => {
            const result = await axios.get(url)
            setAlbumData(result.data);
        })()
    }, [])

    console.log(category);
    const title = category.charAt(0).toUpperCase() + category.slice(1);
    const [show, setShow] = useState(true)

    console.log(albumData);

    return (
        <div className='text-main bg-secondry'>
            <div className='flex flex-row mx-4'>
                <p className='flex-1 text-lg font-bold'>{title} Albums</p>
                <button onClick={() => setShow(!show)} className='text-primary text-lg font-bold'>{show ? 'Show all' : 'Collapse'}</button>
            </div>

            {
                show ?
                    (
                        <div className='mx-4'>
                            <Carousel
                                showThumbs={false} // Disable thumbs
                                showStatus={false}
                                emulateTouch={true}
                                width="100%" // Set the width of the carousel container
                                slidesToShow={7} // Set the number of slides to show at once
                                centerMode={true} // 
                                centerSlidePercentage={100 / 7} // Adjust the center slide width percentage 
                                showIndicators={false}
                            >
                                {
                                    albumData.map((item) => {
                                        const isVisible = show
                                        return (
                                            <div key={item.id}>
                                                <MediaCard
                                                    key={item.id}
                                                    id={item.id}
                                                    follows={item.follows}
                                                    image={item.image}
                                                    description={item.description}
                                                    isVisible={isVisible}
                                                    title={item.title}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    )
                    : (<div className='grid grid-cols-7 gap-4  bg-secondry mx-4 '>
                        {
                            albumData.map((item, index) => {
                                const row = Math.floor(index / 7);
                                const isVisible = !show || row === 0;
                                console.log(show, row)
                                return (
                                    <MediaCard
                                        key={item.id}
                                        id={item.id}
                                        follows={item.follows}
                                        image={item.image}
                                        description={item.description}
                                        isVisible={isVisible}
                                        title={item.title}
                                    />
                                )
                            })
                        }
                    </div>)

            }
        </div>

    )
}

export default Album