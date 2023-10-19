import Card_Card from '@/app/component/Card'
import Footer_Footer from '@/app/component/Footer'
import Fronted from '@/app/component/Fronted'
import NavbarOne from '@/app/component/Home_Page/NavbarOne'
import Nav from '@/app/component/Nav'

export async function generateMetadata(){
    return{
      title : 'Product_Page',
      description : 'Product_Page',
    }
  }

const page = () => {
    return (
        <>
            <NavbarOne />
            <Nav />
          <Fronted />
            <div className='mt-14'>
                <Card_Card />
            </div>
            <Footer_Footer />

        </>
    )
}

export default page
