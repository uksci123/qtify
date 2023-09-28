import logo from '../assets/logo.png'
import search from '../assets/search.png'


const Header = () => {

  return (
    <nav className='bg-primary w-full h-20 static flex items-center justify-between'>

        {/*Logo*/}
        <div className='w-16 h-9 ml-8'>
              <img src={logo}  className='w-full h-full'/>
        </div>

        {/*Search Box*/}
        <div className='flex border border-secondry rounded-lg w-1/3 h-12 ml-8'>
            <input 
            type='text'
            className='flex-1 border border-r-secondry outline-none rounded-l-lg pl-5 placeholder-secondry'  
            placeholder='Seach a album of your choice'
             />
            <button className='flex w-16 bg-main  rounded-r-lg items-center justify-center'>
                <img src={search}/>
            </button>
        </div>
        
        {/*FeedBack Button*/}
        <div className='flex w-40 h-12 items-center justify-center bg-secondry rounded-xl mr-8'>
            <button className='text-primary text-lg font-semibold'>
                Give Feedback
            </button>
        </div>
    </nav>
  )
}

export default Header   