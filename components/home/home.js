import Header from "../header/Header"
import Footer from "../footer/Footer"
import Tours from "../tours/Tours"

function Home(){
    return(
        <>
        <Header/>
        {
            countries.map(element=>{
                return(
                    <Tours
                    countryName = {element.name}
                    image = {element.image}
                    />
                )
            })
        }
        <Footer/>
        </>
    )
    
}
export default Home;