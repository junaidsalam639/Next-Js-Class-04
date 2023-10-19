import Footer_Footer from '@/app/component/Footer'
import Fronted from '@/app/component/Fronted'
import NavbarOne from '@/app/component/Home_Page/NavbarOne'
import Nav from '@/app/component/Nav'
import Shop from '@/app/component/shopp/Shop'

export async function generateMetadata(){
    return{
      title : 'Shop_Page',
      description : 'Shop_Page',
    }
  }

const page = () => {
    return (
        <>
            <NavbarOne />
            <Nav />
            <Fronted />
            <Shop />
            <Footer_Footer />
        </>
    )
}

export default page
