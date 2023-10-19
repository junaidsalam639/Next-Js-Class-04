import Card_Card from './component/Card'
import Footer_Footer from './component/Footer'
import HomePage from './component/Home_Page/Home'
import NavbarOne from './component/Home_Page/NavbarOne'
import Nav from './component/Nav'
import Navbar from './component/Navbar'

export async function generateMetadata(){
  return{
    title : 'Home_Page',
    description : 'Home_Page',
  }
}

export default function Home() {
  return (
<>
<NavbarOne />
<Nav />
<HomePage />
<div className='mt-14'>
  <h1 className='font-bold text-3xl text-center text-indigo-800 mb-4'>Featured Product</h1>
<Card_Card />
</div>
<Footer_Footer />

</>
  )
}



// https://www.figma.com/file/hx16NK5viptTvZnAbgTMk4/Project---Hekto?type=design&node-id=1-38&mode=design&t=smTVEkP1h6NgdkaX-0