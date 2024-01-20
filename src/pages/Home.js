import { Link } from 'react-router-dom'
import HomeImg from '../assests/img/home-page-img.webp'
function Home(){
    return(
        <div className='home'>
            <img src={HomeImg} className='home-img' />
            <h1 className='home-heading'>Organize all your <span className='highlight'>meetings in one place</span></h1>
            <Link to='/add-meeting' className='add-btn-home'>Add new meeting</Link>
        </div>
    )
}

export default Home