import axios from 'axios'
import { useState, useEffect } from 'react'
import MediaCard from './MediaCard'

const Album = () => {

    const [albumData, setAlbumData] = useState([])

    useEffect(() => {
        (async () => {
            const result = await axios.get('https://qtify-backend-labs.crio.do/albums/top')
            setAlbumData(result.data);
        })()
    }, [])
    const [show , setShow ] = useState(true)

    console.log(albumData);

    return (
        <div className='text-main bg-secondry'> 
           <div className='flex flex-row mx-4'>
             <p className='flex-1'>Top Albums</p>
             <button onClick={()=>setShow(!show)} className='text-primary'>{show ?  'Show all'  : 'Collapse'}</button> 
           </div>
           <div className='grid grid-cols-7 gap-4  bg-secondry mx-4 '>
            {
            albumData.map((item , index) => {
                const row = Math.floor(index / 7);
                const isVisible = !show || row===0;
                console.log(show , row)
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
           </div>
        </div>

    )
}

export default Album